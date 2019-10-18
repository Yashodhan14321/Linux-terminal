var directories = new Array();
var files = new Array();

var alldata = "";
var localcount=0;
var clidirect = "~";
var inputtaken = new Array();
function bodyloaded()
{
	alldata="";
	alldata+="<p style='margin-left:5px; text-align: left; color: green;'>ubuntu@ubuntu-HP-250-G5-Notebook-PC<span style='color:#fff;'>:</span><span style='color:blue;'>"+clidirect+"</span>";
	alldata+="<span style='color:#fff;'>$ </span><input id='command"+localcount;
	alldata+="' style='border:none; background-color: transparent; color: #fff;' type='text' onkeypress='javascript:start(event,"+localcount+");'>";
	alldata+="</p>";
	document.getElementById('container').innerHTML+= alldata;
	setval();
	localcount++;
}
function setval()
{
	for(i=0;i<localcount;i++)
	{
		document.getElementById("command"+i).value = inputtaken[i];
	}
}

function start(event,j)
{
	if (event.keyCode == 13 || event.which == 13)
	{
		var com = document.getElementById("command"+j).value;
		inputtaken.push(com);
		if(com.includes('cd')==true)
		{
			if(com[0]=='c'&&com[1]=='d'&&com[2]==' ')
			{
				var directory = com.slice(3 , com.length);
			}
			if(directories.length==0)
			{
				text = "<div style='text-align:left; margin-top:-17px; font-size:16px' id='output"+j+"'></div>";
				document.getElementById("container").innerHTML += text;
				document.getElementById("output"+j).innerHTML = "bash: cd: "+directory+": No such file or directory";
				bodyloaded();
			}
			else
			{
				var k=0;
				for(i=0;i<directories.length;i++)
				{
					if(directory == directories[i])
					{
						clidirect = "~/"+directory;
						k=1;
						break;
					}
				}
				if(k==0)
				{
					text = "<div style='text-align:left; margin-top:-17px; font-size:16px' id='output"+j+"'></div>";
					document.getElementById("container").innerHTML += text;
					document.getElementById("output"+j).innerHTML = "bash: cd: "+directory+": No such file or directory";
				}
				bodyloaded();
			}
		}
		if(com.includes('mkdir')==true)
		{
			if(com[0]=='m'&&com[1]=='k'&&com[2]=='d'&&com[3]=='i'&&com[4]=='r'&&com[5]==' ')
			{
				var directory = com.slice(6,com.length);
				directories.push(directory);
				bodyloaded();
			}
		}
	}
}