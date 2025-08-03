let arr = ['html','css','js','react','node','express','mangodb']

//! 1.for in loop
// for array it will give the index for object it will give key

for(let i in arr)
{
    console.log(i,arr[i]);
}

//! 2.for of loop
// for array it will give all the elements for object the of loop is not possible

for(let ele of arr)
{
    console.log(ele);
}

let ob = {
    ob_name : "pen",
    price : 20,
    color: "red"
}

for(let key in ob)
{
    console.log(key,ob[key]);
}

// for of loop is not possible in object

//for(let i of ob)
//{
//  console.log(i);  
//}

const indiaTestSquad2025 = [
  { name: "Shubman Gill", 
    role: "Captain / Batter", 
    batting: "Right-hand bat", 
    bowling: "Right-arm off-break" },

  { name: "Rishabh Pant", 
    role: "Vice-Captain / Wicket-keeper", 
    batting: "Left-hand bat", 
    bowling: "–" },

  { name: "Yashasvi Jaiswal", 
    role: "Batter", 
    batting: "Left-hand bat", 
    bowling: "Legbreak" },

  { name: "KL Rahul", 
    role: "Wicket-keeper / Batter", 
    batting: "Right-hand bat", 
    bowling: "–" },

  { name: "Sai Sudharsan", 
    role: "All-rounder", 
    batting: "Left-hand bat", 
    bowling: "Legbreak" },

  { name: "Abhimanyu Easwaran", 
    role: "Batter", 
    batting: "Right-hand bat", 
    bowling: "Legbreak Googly" },

  { name: "Karun Nair", 
    role: "Batter", 
    batting: "Right-hand bat", 
    bowling: "Right-arm offbreak" },

  { name: "Nitish Kumar Reddy", 
    role: "All-rounder", 
    batting: "Right-hand bat", 
    bowling: "Right-arm fast-medium" },

  { name: "Ravindra Jadeja", 
    role: "All-rounder", 
    batting: "Left-hand bat", 
    bowling: "Slow left-arm orthodox" },
    
  { name: "Dhruv Jurel", 
    role: "Wicket-keeper", 
    batting: "Right-hand bat", 
    bowling: "–" },

  { name: "Washington Sundar", 
    role: "All-rounder", 
    batting: "Left-hand bat", 
    bowling: "Right-arm off-break" },

  { name: "Shardul Thakur", 
    role: "All-rounder", 
    batting: "Right-hand bat", 
    bowling: "Right-arm medium" },

  { name: "Jasprit Bumrah", 
    role: "Bowler", 
    batting: "Right-hand bat", 
    bowling: "Right-arm fast" },

  { name: "Mohammed Siraj",
    role: "Bowler", 
    batting: "Right-hand bat", 
    bowling: "Right-arm fast" },

  { name: "Prasidh Krishna", 
    role: "Bowler", 
    batting: "Right-hand bat", 
    bowling: "Right-arm fast" },

  { name: "Akash Deep", 
    role: "Bowler", 
    batting: "Right-hand bat", 
    bowling: "Right-arm fast-medium" },

  { name: "Arshdeep Singh", 
    role: "Bowler", 
    batting: "Left-hand bat", 
    bowling: "Left-arm medium-fast" },

  { name: "Kuldeep Yadav", 
    role: "Bowler", 
    batting: "Left-hand bat", 
    bowling: "Left-arm wrist spin" },
];

indiaTestSquad2025.map((ele)=>{
    console.log("player name is :",ele.name.toUpperCase())
    console.log("batting style is : ",ele.batting)
    console.log("------------------------------")
})

//----------------------------PROMPT AND ALERT MESSAGES -----------------------------


// PROMPT is used to get the input from the user by default it will take the input as string 
// to make it as integer type we use parseInt

// Alert is a output given by the browser , any meassage written inside alert will be displayed as a pop up

let addNumbers = () =>{
    let a = parseInt(prompt("enter first number"))
    let b = parseInt(prompt("enter second number"))
    alert (a+b)
}
addNumbers()