import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

function App() {
  const cardDetails=[{
    tierName:"Free",
    price:0,
    features:[
      {
        featureName:"Single User"
      },
      {
        featureName:"5GB Storage"
      },
      {
        featureName:"Unlimited Public Projects"
      },
      {
        featureName:"Community Access"
      },
      {
        featureName:"Unlimited Private Projects",
        isDisabled:true
      },
      {
        featureName:"Dedicated Phone Support",
        isDisabled:true
      },
      {
        featureName:"Free Subdomain",
        isDisabled:true
      },
      {
        featureName:"Monthly Status Reports",
        isDisabled:true
      }
    ]
  },
  {
    tierName:"Plus",
    price:9,
    features:[{
      featureName:"5 Users",
      isBold:true
    },
    {
      featureName:"50GB Storage",
    },
    {
      featureName:"Unlimited Public Projects"
    },
    {
      featureName:"Community Access"
    },
    {
      featureName:"Unlimited Private Projects"
    },
    {
      featureName:"Dedicated Phone Support"
    },
    {
      featureName:"Free Subdomain"
    },
    {
      featureName:"Monthly Status Reports",
      isDisabled:true
    }
    ]
  },
  {
    tierName:"Pro",
    price:49,
    features:[{
      featureName:"Unlimited Users",
      isBold:true
  },
  {
    featureName:"150GB Storage"
  },
  {
    featureName:"Unlimited Public Projects"
  },
  {
    featureName:"Community Access"
  },
  {
    featureName:"Unlimited Private Projects"
  },
  {  
    featureName:"Dedicated Phone Support"
  },
  {
    featureName:"Unlimited Free Sundomains",
    isBold:true,
    isBoldFirstWordAlone:true
  },
  {
    featureName:"Monthly Status Reports"
  }
  ]
}
]
  return (
    <section className="pricing py-5">
    <div className="container">
  <div className="row">{
    cardDetails.map((card,index)=>{
      return <Card key={index} card={card}></Card>
    })
  } 
  </div>
  </div>
  </section>
  );
}
export default App;
