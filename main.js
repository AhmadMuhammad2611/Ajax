var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data = JSON.parse(xhr.responseText);
        var i;
        
        for (i = 0; i< data.length; i++) {
            document.write("<button id=" + i + ">" + data[i].name + "</button>");
        }
        
        var xhr2 = new XMLHttpRequest();
        var myUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

        xhr2.open("GET", myUrl+1, true);

        xhr2.onreadystatechange = function () {
            if (xhr2.readyState == 4 && xhr2.status == 200) {
                
                    var mydata = JSON.parse(xhr2.responseText);
                    document.getElementById("0").onclick = function () {
                    document.write("<br>" + mydata[0].title);
                    }
                    document.getElementById("1").onclick = function () {
                    document.write("<br>" + mydata[1].title);
                    }
                    document.getElementById("2").onclick = function () {
                    document.write("<br>" + mydata[2].title);
                    }
                    document.getElementById("3").onclick = function () {
                    document.write("<br>" + mydata[3].title);
                    }
                    document.getElementById("4").onclick = function () {
                    document.write("<br>" + mydata[4].title);
                    }
                    document.getElementById("5").onclick = function () {
                    document.write("<br>" + mydata[5].title);
                    }
                    document.getElementById("6").onclick = function () {
                    document.write("<br>" + mydata[6].title);
                    }
                    document.getElementById("7").onclick = function () {
                    document.write("<br>" + mydata[7].title);
                    }
                    document.getElementById("8").onclick = function () {
                    document.write("<br>" + mydata[8].title);
                    }
                    document.getElementById("9").onclick = function () {
                    document.write("<br>" + mydata[9].title);
                    }


            }
        }

        xhr2.send();
        
        
    }
}

xhr.send();