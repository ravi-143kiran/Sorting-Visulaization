async function lomuto(ele,l,h){
    let i=l-1;
    
    ele[h].style.background='red';// Highlight the pivot element in red.

    for(let j=l; j<=h-1; j++)
    {
        ele[j].style.background='brown'; // Highlight the current element being compared in brown.
        await delay(time);
        if(parseInt(ele[j].style.height) < parseInt(ele[h].style.height))
        {
            if(i>=l)
            {
                ele[i].style.background='yellow'; // Highlight elements before the pivot in yellow.
            }
            
            i++;
            swap(ele[i],ele[j]);
            ele[i].style.background='orange'; // Highlight the swapped element in orange.
            // if(i!=j)
            // {
                // ele[j].style.background='orange';
            // }
            await delay(time);
        }
        ele[j].style.background='yellow';   // Reset the background color of the compared element to yellow.
    }    
    if(i>=l){
        ele[i].style.background='yellow';   // Reset the background color of elements before the pivot to yellow.
    }
    

    await delay(time);    // Swap the pivot element into its correct position
    swap(ele[i+1],ele[h]);
    
    ele[h].style.background='yellow'; // Reset the background color of the pivot element to yellow
    
    await delay(time);      
        return i+1;  // Return the index of the pivot element's final position.  
    }
    
    async function qsort(ele,l,h){
        
        if(l<h){
        let p=await lomuto(ele,l,h);
        await qsort(ele,l,p-1);
        await qsort(ele,p+1,h);
    }
    else{
        return;
    }
}

document.getElementById('quick').addEventListener('click', async function(){
    let ele=document.querySelectorAll('.sort');
    let l=0;
    let h=parseInt(ele.length)-1;
    disableSizeSlider();
    disableSortingBtn();
    await qsort(ele,l,h);
    for(let i=0; i<=h; i++)
    {
        await delay(time);
        ele[i].style.background='green';
    }
    enableSizeSlider();
    enableSortingBtn();
});