import React, { useState, useEffect, useRef } from 'react';

export default function BioModal(props) {

    // props: {
    //     modalVisibleState,
    //     setModalVisibleState,
    //     setEditBioState,
    //     editBioState,
    //     bioPUT,
    //     userState,
    //     _updateUser
    // }

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisibleState}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <div activeOpacity={1} style={{marginTop: 22, height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                props.setModalVisibleState(false);
              }}>
          <div style={{backgroundColor: 'white', borderRadius: 5, padding: 20, width: '90%', margin: 20}}>
            <p style={{textAlign: 'center'}}>Edit Bio:</p
            <input
              style={{
                padding: 10,
                marginTop: 20,
                textAlign: 'center',
              }}
              onChangeText={bio => props.setEditBioState(bio)}
              value={props.editBioState}
            />
            <div style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Button
                title="Update"
                onPress={() => {
                  props.bioPUT({ name: props.userState.name, bio: props.editBioState })
                  .then(() => props._updateUser());
                  props.setModalVisibleState(!props.modalVisibleState);
                }}></Button>
              <Button
                title="Cancel"
                onPress={() => {
                  props.setModalVisibleState(!props.modalVisibleState);
                }}>
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    )
}