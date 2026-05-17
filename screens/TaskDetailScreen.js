import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskDetailScreen({ navigation, route }) {
  const { tarefa, tarefas, setTarefas } = route.params;
  const [titulo, setTitulo] = useState(tarefa.titulo);
  const [descricao, setDescricao] = useState(tarefa.descricao);
  const [status, setStatus] = useState(tarefa.status);

  function salvar() {
    const atualizadas = tarefas.map(t =>
      t.id === tarefa.id ? { ...t, titulo, descricao, status } : t
    );
    setTarefas(atualizadas);
    navigation.goBack();
  }

  function alternarStatus() {
    setStatus(status === 'pendente' ? 'concluida' : 'pendente');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />
      <Text style={styles.label}>Status: {status}</Text>
      <Button title="Alternar Status" onPress={alternarStatus} />
      <View style={{ marginTop: 15 }}>
        <Button title="Salvar" onPress={salvar} />
      </View>
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