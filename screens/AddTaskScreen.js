import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTaskScreen({ navigation, route }) {
  const { tarefas, setTarefas } = route.params;
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function adicionarTarefa() {
    if (titulo && descricao) {
      const novaTarefa = {
        id: String(tarefas.length + 1),
        titulo,
        descricao,
        status: 'pendente',
      };
      setTarefas([...tarefas, novaTarefa]);
      navigation.goBack();
    } else {
      alert('Preencha o título e a descrição!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
      <Button title="Salvar Tarefa" onPress={adicionarTarefa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
});