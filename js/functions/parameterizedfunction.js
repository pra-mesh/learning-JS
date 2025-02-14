//Write a parameterized function to calculate the colume of cuboid
//volume = l*b*h;
const volume = ({length=0,height=0,breadth=0}) =>{
    return  length*breadth*height;
}
console.log(volume({height:10,length:5,breadth:6}));
console.log(volume({length:5,breadth:6}));