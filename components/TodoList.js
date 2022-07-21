import React, { Component } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { Modal, Portal, Text, Button, Provider, TextInput } from 'react-native-paper';
import monStyle from "./style";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.monStyle = monStyle;
    }
    state = {
        list: [],
        inputTxt: '',
        clg: '',
        visible: false,
    }

    
    title = 'Ma TodoList :';
    showModal = () => this.setState({ visible: true });
    hideModal = () => this.setState({ visible: false });
    insertList() {
        if (this.state.list.length === 0) {
            let listTmp = this.state.list;
            listTmp.push({ key: this.state.inputTxt });
            this.setState({ list: listTmp });
        } else {
            let autorised = true;
            this.state.list.map((value) => {
                if (this.state.inputTxt === value.key) {
                    autorised = false;
                    this.showModal();
                }
            });
            if (autorised) {
                let listTmp = this.state.list;
                listTmp.push({ key: this.state.inputTxt });
                this.setState({ list: listTmp });
                this.setState({ clg: '' });
            }
            // avec une ternaire
            // autorised ? this.setState({clg:''}) : this.setState({clg: 'Cet objet est déjà dans la liste !'})
        }

        this.setState({ inputTxt: "" });
    }
    deleteItem(index) {
        let listTmp = this.state.list;
        listTmp.splice(index, 1);
        this.setState({ list: listTmp });
    }
    render() {
        return (
            <View>
                <Text style={monStyle.title}>{this.title}</Text>
                <TextInput
                    style={this.monStyle.txt}
                    onChangeText={(text) => { this.setState({ inputTxt: text }) }}
                    value={this.state.inputTxt}
                ></TextInput>
                <View style={monStyle.btn}>
                    <Button
                        mode='outlined'
                        buttonColor='black'
                        textColor='white'
                        onPress={() => {
                            this.state.inputTxt.length !== 0 && this.insertList()// BIG UP Williams !!! OUH OUH OUH !!!
                        }}>Ajouter un article</Button>
                </View>
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        renderItem={({ item, index }) =>
                            <View>
                                <Text>
                                    {item.key}
                                    <Button
                                        onPress={() => { this.deleteItem(index) }}
                                    >X</Button>
                                </Text>
                            </View>}
                    />
                </ScrollView>
                <Text>{this.state.clg}</Text>
                <Provider>
                    <Portal>
                        <Modal  dismissable={true} visible={this.state.visible} onDismiss={this.hideModal} contentContainerStyle={monStyle.containerStyle}>
                            <Text>Cet objet est déjà dans la liste !</Text>
                        </Modal>
                    </Portal>
                </Provider>
            </View>
        )
    }
};


export default TodoList;