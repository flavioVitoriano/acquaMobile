import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/index";
import {
  SaleValue,
  Container,
  Sale,
  Header,
  SaleList,
  SaleProperty,
  DetailsButton,
  DetailsButtonText,
} from "./styles";
import DateRange from "../../components/DateRange";
import RemoteSelect from "../../components/RemoteSelect";
import moment from "moment";
import { Alert } from "react-native";
import uniqBy from "lodash/uniqBy";

interface ClientData {
  id: number;
  full_name: string;
}

interface SaleFormData {
  id: number;
  quantity: number;
  value: number;
  obs: string;
  submit_date: any;
  client: ClientData;
}

interface DateProps {
  startDate: Date;
  endDate: Date;
}

const humanDate = (date: any) => {
  return date.format("DD/MM/YYYY");
};

const makeResponseData = (data: Array<object>) =>
  data.map((item: any) => {
    item.submit_date = moment(item.submit_date);
    return item;
  });

export default function SaleCreated() {
  const [sales, setPurchaces] = useState<SaleFormData[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const [client, setClient] = useState("");
  const [clients, setClients] = useState([]);

  const navigation = useNavigation();

  function navigateToDetail(id: number) {
    navigation.navigate("DetailSale", { id });
  }

  function loadSales() {
    api
      .get("/sales/", {
        params: { page },
      })
      .then((response) => {
        setPurchaces(makeResponseData(response.data));
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
      });
  }

  const onClientChange = (value: string) => {
    setClient(value);
  };

  const getClientData = () => {
    api
      .get("/clients/", { params: { limit: 1000 } })
      .then((response) => setClients(response.data))
      .catch((error) => Alert.alert("Fracasso"));
  };

  const onSubmitFilter = (dates: DateProps) => {
    setPurchaces([]);
    setPage(1);
    setFilterParams({
      start_date: dates.startDate,
      end_date: dates.endDate,
      client: client,
    });
  };

  const onEndReached = () => {
    if (loading) {
      return;
    }
    if (Number(total) > 0 && Number(sales.length) === Number(total)) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    setLoading(true);

    api
      .get("/sales/", {
        params: { page, ...filterParams },
      })
      .then((response) => {
        const resData = makeResponseData(response.data);
        const data = uniqBy([...sales, ...resData], "id");
        setPurchaces(Array.from(data.values()));
        setTotal(response.headers["x-total-count"]);
        setLoading(false);
      });
  }, [page, filterParams]);

  useEffect(() => {
    loadSales();
  }, []);

  useEffect(() => {
    getClientData();
  }, []);

  return (
    <Container>
      <Header></Header>
      <RemoteSelect
        onSelectChange={onClientChange}
        data={clients}
        labelField="full_name"
        valueField="id"
        initialLabel="Selecione um cliente"
      />
      <DateRange onSubmit={onSubmitFilter} />
      <SaleList
        data={sales}
        keyExtractor={(sale: SaleFormData) => String(sale.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.2}
        renderItem={({ item: sale }) => (
          <Sale>
            <SaleProperty>ID e cliente:</SaleProperty>
            <SaleValue>
              {sale.id} {sale.client.full_name}
            </SaleValue>

            <SaleProperty>Data:</SaleProperty>
            <SaleValue>{humanDate(sale.submit_date)}</SaleValue>

            <SaleProperty>Quantidade:</SaleProperty>
            <SaleValue>{sale.quantity}</SaleValue>

            <SaleProperty>Valor Unitário:</SaleProperty>
            <SaleValue>{sale.value}</SaleValue>

            <SaleProperty>total:</SaleProperty>
            <SaleValue>{sale.quantity * sale.value}</SaleValue>

            <DetailsButton onPress={() => navigateToDetail(sale.id)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Sale>
        )}
      />
    </Container>
  );
}
