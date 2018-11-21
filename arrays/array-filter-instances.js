const assert = require('assert').strict;

const instances = [
  {
    "InstanceType": "t3.small",
    "ImageId": "ami-000",
    "State": {
      "Name": "running"
    },
    "Tags": [
      {
        "Key": "Name",
        "Value": "Web1"
      },      
      {
        "Key": "ServerType",
        "Value": "Web Server"
      }
    ],
  },
  {
    "InstanceType": "t3.small",
    "ImageId": "ami-001",
    "State": {
      "Name": "running"
    },
    "Tags": [
      {
        "Key": "Name",
        "Value": "App1"
      },      
      {
        "Key": "ServerType",
        "Value": "App Server"
      }
    ],
  },  
];

let getInstancesByServerType = serverType => {
  let numInstances = instances.length;
  let instancesOfServerType = [];
  for (let i = 0; i < numInstances; i++) {
    let instance = instances[i];
    let tags = instance['Tags'];
    let numTags = tags.length;
    for (let i = 0; i < numTags; i++) {
      if (tags[i]['Key'] === 'ServerType' && tags[i]['Value'] === serverType &&
          instance['State']['Name'] === 'running') {
        instancesOfServerType.push(instance);
      }
    }
  }
  return instancesOfServerType;
}

console.log(getInstancesByServerType('App Server'));
/*
[ { InstanceType: 't3.small',
    ImageId: 'ami-001',
    State: { Name: 'running' },
    Tags: [ [Object], [Object] ] 
  } 
]
*/

const serverType = 'App Server';
const result = instances.filter(e => 
  e['Tags'].find(tag => tag['Key'] === 'ServerType' && tag['Value'] === serverType && e['State']['Name'] === 'running')
);

console.log(result);
/*
[ { InstanceType: 't3.small',
    ImageId: 'ami-001',
    State: { Name: 'running' },
    Tags: [ [Object], [Object] ] 
  } 
]
*/
