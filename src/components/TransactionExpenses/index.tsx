import {
  Container,
  Cabec,
  Name,
  Occupation,
  Footer,
  FooterData,
  Amount,
} from "./styles";
import { EmployesDTO } from "../../storage/EmployesDTO";
import { inss, irf, salaryReceived, tranportationVauchers } from "../util/calculate";

type Props= {
  data: EmployesDTO
}

export function TransactionExpenses({ data }: Props) {
  return (
    <Container>
      <Cabec>Nome</Cabec>
      <Name>{data.name}</Name>

      <Footer>
        <Cabec>Função</Cabec>
        <Cabec>Salário</Cabec>
      </Footer>

      <FooterData>
        <Occupation>{data.occupation}</Occupation>
        <Amount>R$ {data.salary}</Amount>
      </FooterData>

      <Footer>
        <Cabec>Inss</Cabec>
        <Cabec>Irf</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {inss(data.salary)}</Amount>
        <Amount>R$ {irf(data.salary)}</Amount>
      </FooterData>

      <Footer>
        <Cabec>Vale Transporte</Cabec>
        <Cabec>Salario Liquido</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {tranportationVauchers(data.salary)}</Amount>
        <Amount>R$ {salaryReceived(data.salary)}</Amount>
      </FooterData>

    </Container>
  )
}
