function getParameterByName(name, url = window.location.href){
    var a = location.search&&location.search.substr(1).replace(/\+/gi," ").split("&");
    for (var i in a){
        var s = a[i].split("=");
        a[i]  = a[unescape(s[0])] = "\"" + unescape(s[1]) + "\"";
    }
    return a;
}

function getStandardChecklist()
{
     var mdFile = new XMLHttpRequest();
     var loc = window.location.pathname;
     var dir = loc.substring(0, loc.lastIndexOf('/'));
	 
     mdFile.open("GET", dir + "/md/essentials.md", false);
     keys = getParameterByName('standard');
     mdFile.onreadystatechange = function(){
        if (mdFile.readyState === 4){
            if (mdFile.status === 200  || mdFile.status == 0){
                var dom = document.createElement("div");
                dom.innerHTML = mdFile.responseText;
                var standardTags = dom.getElementsByTagName("standard");
                for (let standardTag of standardTags){
                    let standardName = "\"" + standardTag.getAttribute('name') + "\"";
                    if (keys.includes(standardName)){
                        var standardTitle = document.createElement("H2");
                        standardTitle.innerHTML = standardName.replaceAll("\"", "");
                        document.body.appendChild(standardTitle);
                        var checklistTags = standardTag.getElementsByTagName("checklist");
                        for (let checklistTag of checklistTags){
                            var checklistTitle = document.createElement("H3");
                            checklistTitle.innerHTML = checklistTag.getAttribute('name')
                            document.body.appendChild(checklistTitle);
                            
                            checklistText = checklistTag.innerText.replaceAll("[ ]", "").
                                                                   replaceAll(">", "").
                                                                   replaceAll("\n\n", "<br/>");

                            var checklistDiv = document.createElement("div");
                            checklistDiv.innerHTML = checklistText;
                            document.body.appendChild(checklistDiv);
                        }
                        //document.getElementById("fromFile").innerHTML = standardTag.innerHTML;
                    }
                }                  
            }
			else{
				alert("Can't read the md file.");
			}
        }
     }
     mdFile.send(null);
}