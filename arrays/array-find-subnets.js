const subnets = [
  {
    'name': 'subnet-a',
    'SubnetId': 1
  },
  {
    'name': 'subnet-b',
    'SubnetId': 2
  },
  {
    'name': 'subnet-c',
    'SubnetId': 3
  },
  {
    'name': 'subnet-d',
    'SubnetId': 4
  },
  {
    'name': 'subnet-e',
    'SubnetId': 5
  },  
];

//old and busted...
const getSubnetById = subnetId => {
  const numSubnets = subnets.length;
  for (let i=0; i < numSubnets; i++) {
    if (subnets[i]['SubnetId'] === subnetId) {
      return subnets[i];
    }
  }
}

const temp = getSubnetById(1);
console.log(temp);    //{ name: 'subnet-a', SubnetId: 1 }


const subs2 = subnets.find(el => el['SubnetId'] == 1);
console.log(subs2);   //{ name: 'subnet-a', SubnetId: 1 }

//new hotness...
//we could easily make this a reusable function
const findSubnetById = subnetId => subnets.find(el => el['SubnetId'] == subnetId);
console.log(findSubnetById(4));   //{ name: 'subnet-a', SubnetId: 4 }

//FYI filter() is not quite what we are looking for as this returns an array
const subs = subnets.filter(el => el['SubnetId'] == 1); 
console.log(subs);    //[ { name: 'subnet-a', SubnetId: 1 } ]
