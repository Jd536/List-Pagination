let pagination = (pages)=>{
   
    let pageDiv= document.createElement("div");
    pageDiv.className = "pagination";
    let ul = document.createElement("ul");
    
    for (let i=1; i<=pages;i++){
       let li = document.createElement("li");
       let link = document.createElement("a");
       link.setAttribute("href","#");
       link.textContent=i;
       li.appendChild(link);
       ul.appendChild(li);
    }
    pageDiv.appendChild(ul);
    page.appendChild(pageDiv);
    
 }
 pagination(numberOfPages);
 
 
 let showPage = (list)=>{
       let studentsNum = list.length;
       // DISPLAY ONLY THE FIRST 10 ELEMENT IN THE LIST BY APPLYING DISPLAY NONE TO ANY ITEM WITH AN INDEX MORE THAN OR EQUAL TO 10
       for(let x=0; x<list.length; x++){
          if(x>=10)
          list[x].style.display = "none";
          }
 // ADD ALL THE ANCHOR TAGS INSIDE THE UL WITH AN  "href=#" ATTRIBUTE IN AN ARRAY AND ASSIGN THE CLASS NAME ACTIVE TO THE FIRST ANCHOR TAG
       let links = Array.from(document.querySelectorAll('[href="#"]')); 
       links[0].className="active";
       for(let i=0; i<links.length;i++){
 // CLICK EVENT ADDED TO THE LINK (the pagination numbers) 
       links[i].addEventListener("click", (e)=>{
          let activeLink=document.querySelectorAll('[class="active"]')[0];
          activeLink.classList.remove("active")
          e.target.className="active";
          let indexVal = parseInt( e.target.textContent);
          // MIIN AND MAX VARIABLE CONTAINS THE MIN INDEX TO DISPLAY AND THE MAX INDEX TO DISPLAY
          let min = indexVal*10-10;
          let max = indexVal*10-1;
          // HIDES ALL ITEMS ON CLICK
          for(let x=0; x<list.length; x++){
          list[x].style.display = "none";
          }
          // DISPLAY THE ITEMS WHICH INDEX IS IS EQUAL TO  THE 
          for (let i=min; i<=max;i++){
             if(list[i]!=undefined){
             list[i].style.display = "";
             }
             
          }
       });
    }
    }
    
    showPage(studentsList);
 
 
 
 
 
 
 /*** 
    Create the `appendPageLinks function` to generate, append, and add 
    functionality to the pagination buttons.
 ***/
 
 
 // Create search bar
 let insertSearchBar = ()=>{
    let div= document.createElement("div");
    div.className="student-search";
    let input= document.createElement("input");
    input.setAttribute("placeholder","Search for students");
    div.appendChild(input);
    let searchButton = document.createElement("button");
    searchButton.textContent="Search";
    div.appendChild(searchButton);
    let pageHeader= document.querySelectorAll(".page-header")[0];
    pageHeader.appendChild(div);
 }
 insertSearchBar();
 
 
 // search function
 
 
 let studentSearch = ()=>{
    
    let searchBar = document.querySelectorAll(".student-search input")[0];
    let searchButton = document.querySelectorAll(".student-search button")[0];
   
       // search on click event
    searchButton.addEventListener('click', (e)=>{
       let alert = document.createElement("p");
       results.length=0;
         //assign the input value to a variable
       let input = searchBar.value.toLowerCase();
       if (input==" "){
          alert.textContent="The Search field is empty.";
          e.preventDefault();
       }
       let names = Array.from(document.querySelectorAll(".student-details h3"));
        studentsList.forEach((student)=>{
          const name= student.querySelectorAll("h3")[0].textContent.toLocaleLowerCase();
          if(name.indexOf(input)!=-1){
             results.push(student);// add the displayed element in an array
             student.style.display="block"; 
             console.log(results);
          }else{
             student.style.display ="none";
          }
       });
       // Pagination based on search results
       let paginationDiv = document.querySelectorAll(".pagination")[0];
         let pageParent =paginationDiv.parentNode;
         pageParent.removeChild(paginationDiv);
       
       let resultsPagination= ()=>{
         
             if(results.length==0){
             alert.textContent="No Results Found !!!";
             page.appendChild(alert);
          } if(results.length>0){
             let = numberOfResultsPages = Math.ceil(results.length/10);
             pagination(numberOfResultsPages);
             showPage(results);
          }
       }
  
      resultsPagination();
  });
    // search on keyup event
    searchBar.addEventListener('keyup', (e)=>{
       //assign the input value to a variable
       let input = e.target.value.toLowerCase();
       let names = Array.from(document.querySelectorAll(".student-details h3"));
      studentsList.forEach((student)=>{
          const name= student.querySelectorAll("h3")[0].textContent.toLocaleLowerCase();
          if(name.indexOf(input)!=-1){
             student.style.display="block";           
          }else{
             student.style.display ="none";
          }
        
       });
       
  });
  
 }
 studentSearch();
 
 // Remember to delete the comments that came with this file, and replace them with your own code comments.