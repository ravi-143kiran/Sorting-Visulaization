async function bubble(){
    const ele=document.querySelectorAll(".sort");
   for(let i=0;i<ele.length-1;i++)
   {
          for(let j=0;j<ele.length-i-1;j++)
          {
            ele[j].style.background='red';  // Highlight the currently compared elements in red.
            ele[j+1].style.background='red';

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                   await delay(time);   // Introduce a delay before swapping elements.
                   swap(ele[j],ele[j+1]);    // Swap the elements if they are out of order.
            } 
            ele[j].style.background='yellow';       // Reset the background color to yellow.

            ele[j+1].style.background='yellow';

          }
          ele[ele.length-i-1].style.background='green';   // Mark the last element as green, as it's in its final position.
    }
    ele[0].style.background='green';  // Mark the first element as green, as it's also in its final sorted position.
}
// The code you provided sets up an event listener for a button with the id "bubble." When this button is clicked, it triggers the bubble function
document.getElementById('bubble').addEventListener("click", async function(){
    disableSizeSlider();  // Disable the size slider or any other UI elements as needed.
    disableSortingBtn();  // Disable other sorting buttons or UI elements during sorting.
    await bubble();        // Call the bubble sort function asynchronously.
  
    // After the sorting is complete:
    enableSizeSlider();    // Enable the size slider or any other UI elements.
    enableSortingBtn();    // Enable other sorting buttons or UI elements.
  });
  

