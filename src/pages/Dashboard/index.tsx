import { FlatList } from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TransactionExpenses } from '../../components/TransactionExpenses'
import { Container, Transactions } from './styles'
import { useState } from 'react'
import { EmployesDTO } from '../../storage/EmployesDTO'

export function Dashboard() {

  const [name, setName] = useState("")
  const [occupation, setOccupation] = useState("")
  const [salary, setSalary] = useState("")

  const [employes, setEmployes] = useState<EmployesDTO[]>([])

  function handleAddNewEmployee() {
    const data = {
      id: String(new Date().getTime()),
      name,
      occupation,
      salary: parseFloat(salary)
    }

    setEmployes([...employes, data])

    setName("")
    setOccupation("")
    setSalary("")
  }

  return (
    <Container
    >
      <Header title='Cadastro de Funcionários' />

      <Input
        placeholder='Nome'
        placeholderTextColor='#363F5F'
        onChangeText={value => setName(value)}
        value={name}
      />

      <Input
        placeholder='Função'
        placeholderTextColor='#363F5F'
        onChangeText={value => setOccupation(value)}
        value={occupation}
      />

      <Input
        placeholder='Salário'
        placeholderTextColor='#363F5F'
        onChangeText={value => setSalary(value)}
        value={salary}
      />

      <Button
        title='Adicionar'
        onPress={handleAddNewEmployee}
      />

      <Transactions>
        <FlatList 
          data={employes}
          keyExtractor={(item) => item.id}
          renderItem={({ item}) => (
            <TransactionExpenses 
              data={item}
            />
          )}>

        </FlatList>
      </Transactions>

    </Container>
  )
}

