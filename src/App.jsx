import './App.css'
import CounterOne from './components/customeHook/CounterOne'
import CounterTwo from './components/customeHook/CounterTwo'
import DocTitleOne from './components/customeHook/DocTitleOne'
import DocTitleTwo from './components/customeHook/DocTitleTwo'
import UserForm from './components/customeHook/UserForm'
import ComponentA from './components/props/ComponentA'
import Countermemo from './components/useCallback/Countermemo'
import ParentComponent from './components/useCallback/ParentComponent'
import DataFetching from './components/useEffect/DataFetching'
import DataFetchingTwo from './components/useReducer/DataFetchingTwo'
import ClassTimer from './components/useRef/ClassTimer'
import FocusInput from './components/useRef/FocusInput'
import HookTimer from './components/useRef/HookTimer'

function App() {

  const handleclick = () => {
    console.log("This is triggered in Appjs")
  }

  return (
    <>
    <UserForm />
    {/* <CounterOne /> */}
    {/* <CounterTwo /> */}
    {/* <DocTitleOne /> */}
    {/* <DocTitleTwo /> */}
    {/* <HookTimer /> */}
    {/* <ClassTimer /> */}
    {/* <FocusInput /> */}
    {/* <Countermemo /> */}
    {/* <ParentComponent></ParentComponent> */}
      {/* <ComponentA myclick={handleclick}></ComponentA> */}
      {/* <DataFetching></DataFetching> */}
      {/* <DataFetchingTwo></DataFetchingTwo> */}
    </>
  )
}

export default App
