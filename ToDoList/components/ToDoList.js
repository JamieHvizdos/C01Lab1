import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [toDos, setToDoList] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

    const removeToDo = (id) => {
        setToDoList((prevToDoList) => prevToDoList.filter(title => title.id !== id));
    };
 
    const addToDo = (newTitle) => {
        const newToDoList = { id: uuidv4(), title: newTitle };
        setToDoList((prevToDoList) => [...prevToDoList, newToDoList]);
    };

    return (
        <View style={styles.container}>
            {toDos.map((ToDoList) => (
                <View key={ToDoList.id} style={styles.todoItem}>
                    <Text style={styles.text}>{ToDoList.title}</Text>
                    
                    <View style={styles.removeButton}>
                        <Button title="Remove" onPress={() => removeToDo(ToDoList.id)} />
                    </View>
                    
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        marginRight: 10,
    },
    removeButton: {
        marginLeft: 10,
    },
});
export default ToDoList;