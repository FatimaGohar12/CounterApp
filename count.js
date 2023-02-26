const endDate = "23 oct 2023 01:54:40 PM";
const input = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
 const diff = (end - now) / 1000;
//  console.log(Math.floor(diff / 3600 /60 /24))



 

   if (diff < 0) return;

  //convert into days
 input[0].value = Math.floor(diff / 3600 / 24);
//  convert into hours
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}

// inital call
clock();

//to run it every seconds
setInterval(() => {
    clock()
}, 1000);