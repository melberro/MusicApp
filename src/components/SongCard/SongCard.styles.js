import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  content_container: {
    flexDirection: 'row'
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 5,
  },
  soldout_title: {
    fontSize: 12,
    color: 'red',
  },
  album: {
    fontWeight: 'gray',
  }
});
