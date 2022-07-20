import { useEffect } from "react"
import { Button, Text, StyleSheet, SafeAreaView } from "react-native"
import { useSelector } from "react-redux";
import { getData } from "../redux/reducers/appReducer";
import { useAppDispatch } from "../redux/store";


export const Main = ({ navigation }: any) => {

  const dispatch = useAppDispatch();
  const data = useSelector<any, any>(store => store.app)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  
  return (
    <SafeAreaView style={style.main}>
      <Text>Hello Main</Text>
      <Button title="Click" onPress={() => navigation.navigate('Card')} />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})