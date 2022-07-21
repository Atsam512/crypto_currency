import React, { useState , useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Card } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);





const SearchApi = () => {
  const [data , setData] = useState("");
  const [ apiData , setApiData] = useState([]);
  const [ searchResult , setSearchResult] = useState(null);

  const onSearch = (value) => console.log(value);

  useEffect(() => {
    
    // const reponse = fetch("");
    // const data = response.data();






    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'a2da782ea1mshcc42a796bad97b0p1a2218jsn1127b0c19d37',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log("This is the Response" + response.data);
  setApiData(response.data.data.coins)
  

  // console.log(data)
}).catch(function (error) {
	console.error(error);
});
 
  }, [])
  

  const handleSubmit=(e)=>{

    e.preventDefault();
 

  }
  const handleOnChange = (e) => {
    console.log(12312312,e.target.value)
const value = e.target.value;
setData(value.toUpperCase())
const result = apiData.find(apiData => apiData.name.includes(value))
setSearchResult(result)
  }

  console.log(searchResult,"=======seear")
return(
 <>
  <Space direction="vertical"  style={{ display: "flex",alignItems:"center", justifyContent:"center"}}>
 <form onSubmit={(e)=>handleSubmit(e)}>
    <Search
      placeholder="input search text"
      // enterButton="Search"
      size="large"
      suffix={suffix}
      value={data}
      onChange={handleOnChange}
    />
    </form>
  </Space>

  <div className="container" style={{height:"60vh", overflow: 'auto'}}>
    <div className="row d-flex justify-content-center">
     

     
  {data && searchResult ? 
  <>
        <div className="col-md-4 mt-5" >
 <div className="site-card-border-less-wrapper d-flex justify-content-center text-center">
      <Card
      
  title={searchResult.name}
  bordered={false}
  style={{
    width: 300,
  }}
>
  
  <img src={searchResult.iconUrl} alt="" height='100px' />
  <br></br>
  <br></br>
  <p>{searchResult.name}</p>
  <br></br>
  <p>{searchResult.price}</p>
  <p>{searchResult.color}</p>
</Card>
</div>
</div>
  </> :
    apiData.map((t)=>(
      <div className="col-md-4 mt-5" >
 <div className="site-card-border-less-wrapper d-flex justify-content-center text-center">
      <Card
      
  title={t.name}
  bordered={false}
  style={{
    width: 300,
  }}
>
  
  <img src={t.iconUrl} alt="" height='100px' />
  <br></br>
  <br></br>
  <p>{t.name}</p>
  <br></br>
  <p>{t.price}</p>
  <p>{t.color}</p>
</Card>
</div>
</div>
    ))
  }

</div>
        
     
   
  </div>



</> 
)

};

export default SearchApi;