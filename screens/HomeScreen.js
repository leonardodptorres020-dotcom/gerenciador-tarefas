import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([
    { id: '1', titulo: 'Estudar React Native', descricao: 'Ver aula de componentes', status: 'pendente' },
    { id: '2', titulo: 'Fazer exercício', descricao: 'Correr 30 minutos', status: 'concluida' },
  ]);

  function deletarTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.tarefa}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { tarefa: item, setTarefas, tarefas })}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.status}>Status: {item.status}</Text>
            </TouchableOpacity>
            <Button title="Excluir" color="red" onPress={() => deletarTarefa(item.id)} />
          </View>
        )}
      />
      <View style={styles.botoes}>
        <Button title="Nova Tarefa" onPress={() => navigation.navigate('AddTask', { tarefas, setTarefas })} />
        <Button title="Configurações" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  tarefa: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});