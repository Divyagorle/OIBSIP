function storeData()
{
	const title = document.getElementById("title");
	const description = document.getElementById("description");
	let myobject = [title.value,description.value,"Pending"];
	let example = JSON.parse(localStorage.getItem("example"));
	if(example==null)
	{
		localStorage.setItem("example",JSON.stringify([myobject]));
	}
	else
	{
		example.push(myobject);
		localStorage.setItem("example",JSON.stringify(example));
	}
	title.value = "";
	description.value = "";
	displayData();
}
function displayData()
{
	let example = JSON.parse(localStorage.getItem("example"));
	if(example!=null)
	{
		let table = "<table><tr><th>Title</th><th>Description</th><th>Status</th><th>Actions</th></tr>"
		data = "";
		for(let i=0;i<example.length;i++)
		{
			if(example[i][2]=="Pending"){
			data = data+"<tr><td>"+example[i][0]+"</td><td>"+example[i][1]+"</td><td>"+example[i][2]+""
			data = data+"</td><td><button style='background-color:red;' onclick=deleteData("+i+")>Delete</button><button style='background-color:green;' onclick=updateData("+i+")>Completed</button></td></tr>";
			}
		}
		end = "</table>";
		document.getElementById("Pending-list").innerHTML = table+data+end;
		//---------------------------------------------------------------------------
		let table1 = "<table><tr><th>Title</th><th>Description</th><th>Status</th><th>Actions</th></tr>"
		data1 = "";
		for(let i=0;i<example.length;i++)
		{
			if(example[i][2]=="Completed"){
			data1 = data1+"<tr><td>"+example[i][0]+"</td><td>"+example[i][1]+"</td><td>"+example[i][2]+""
			data1 = data1+"</td><td><button style='background-color:red;' onclick=deleteData("+i+")>Delete</button></td></tr>";
			}
		}
		end1 = "</table>";
		document.getElementById("Completed-list").innerHTML = table1+data1+end1;
	}
	else
	{
		document.getElementById("Pending-list").innerHTML = "<h1>No Pending Tasks</h1>";
	}
}
function deleteData(i)
{
	let example = JSON.parse(localStorage.getItem("example"));
	example.splice(i,1);
	localStorage.setItem("example",JSON.stringify(example));
	displayData();
}
function updateData(i)
{
	let example = JSON.parse(localStorage.getItem("example"));
	example[i][2] = "Completed";
	localStorage.setItem("example",JSON.stringify(example));
	displayData();
}