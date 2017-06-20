var button=document.getElementById("button");

var input=document.getElementById("input");

var display=document.getElementById("display");

 var display2=document.querySelector(".display2");

 var hide=document.querySelector(".hide");


	hide.classList.add("hide");



var request=new XMLHttpRequest();

button.addEventListener("click",function(){

var zip=input.value;



var link="http://api.openweathermap.org/data/2.5/weather?zip="+zip+"&units=metric&APPID=4ed1829acc1c5647a9b9f967b03d37d8"





	request.open("GET",link);

		request.onload=function(){


		var data=JSON.parse(request.responseText);



		display.textContent=data.main.temp+hide.textContent;

		display2.textContent=data.name;


		hide.classList.remove("hide");




    }

	request.send();





});


//GitHUb code


var gitSite="https://api.github.com/users/";

var repos="/repos";

var greq= new XMLHttpRequest();


$("#gbutton").on("click",function(){
	


				table.textContent=" ";

	
				var value=$("#gtext").val();
				
					if(value != 0){
						console.log(value);


	 			var fullsite=gitSite+value+repos;

				greq.open("GET",fullsite);

			greq.onload=function(){


					var data=JSON.parse(greq.responseText);

			
					var table = "<table class='table table-bordered table-hover table-condensed small'>"+"UserName = "+"<strong>"+value+"</strong>"+"<br>";


					var content = table+"<th>Repositories</th>"+"<th>Repository ID</th>"+"<th>url</th>";
			
			
					for(i=0; i<data.length; i++){
    				content += '<tr scope="row"><td>'  +  data[i].name+ '</td>'+'<td>'+ data[i].id +'</td>'+  '<td>'+data[i].html_url+'</td></tr>';

    				}
					content += "</table>"
			
					$("#table").append(content);
			}	
			greq.send();	
		}
		else{
			alert("please enter a GitHub Username")
		}
		

							

							// '<td>'+data[i].html_url+'</td>

							// '<td>'+'<a href=' +data[i].html_url+ "'"+'> </a>''</td>


					
			});