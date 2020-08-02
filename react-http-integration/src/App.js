import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import WithListLoading from './components/listloading/WithListLoading';
import List from './components/list/List';
import axios from 'axios';

function App() {

  const ListLoading = WithListLoading(List)
  const [state, setstate] = useState({
    loading: false,
    repos: null,
    error: null
  });

  const apiUrl = "https://api.github.com/users/thecomputerguy/repos"
const loadDataFromApiWithAxios = async () =>{
      try{

        const repos = await axios.get(apiUrl)
        setstate({loading: false,repos: repos.data,error:null})
      }catch(error){
        setstate({loading: false,repos: null,error: error.message})
      }
    }

    const loadDataFromApiWithFetch = async () => {
      
      try{
      const repos = await fetch(apiUrl)
      const data = await repos.json()
      setstate({
        loading:false,
        repos: data,
        error: null
      })
    }catch(error){
      setstate({
        loading: false,
        repos: null,
        error: error.message
      })
    }
    }

  useEffect(() => {
    
    setstate({loading: true})
    //loadDataFromApiWithFetch()
    loadDataFromApiWithAxios()
    // fetch(apiUrl)
    // .then(response => response.json())
    // .then(data => setstate({loading: false, repos: data}))
    //use axios in place of fetch
    // axios
    // .get(apiUrl)
    // .then(repos => setstate({loading: false, repos: repos.data}))
    // .catch( error => setstate({
    //   loading: false,
    //   repos: null,
    //   error: error.message
    // }))
    
  }, [setstate])

  if(state.error) return <p style={{textAlign:"center"}}>{state.error}</p>
  return (
    <div className="App">
     <ListLoading isLoading={state.loading} repos={state.repos}></ListLoading>
      <div>
        Built{' '} with
        <span>❤❤❤</span> {' '}
        by Varun Sharma
      </div> 
    </div>
  );
}

export default App;
