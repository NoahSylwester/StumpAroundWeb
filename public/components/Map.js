import React from 'react';

export default class Map extends React.Component {
  render() {
    return (
      <div>
        <MapView 
            // latitudeDelta={0.0922}
            // longitudeDelta={0.0421}
            region={
                {
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02
                }
            }
            style={styles.mapStyle}>
            <MapView.Marker
                title={this.props.name}
                description={this.props.summary}
                anchor={{x:this.props.longitude,y:this.props.latitude}}
                coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                }}
            />
        </MapView>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 200//Dimensions.get('window').height,
  },
});
