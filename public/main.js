console.log('我是main.js233')

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload = ()=>{
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onload = ()=>{
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    }
    request.onerror = ()=>{
        console.log('失败了')
    }
    request.send()
}


getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('get','/style.css');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status<=300){
                const style =document.createElement("style")
                console.log(style)
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('傻逼css没了')
            }
            
        }
    }
    request.send()
}

getXML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState===4 && request.status ===200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim())
        }
    }
    request.send();
}

getJSON.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET','5.JSON');
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200){
            const object = JSON.parse(request.response);
            console.log(object)
            myName.textContent = object.name           
        }
    }
    request.send();
}

let n = 1 ;
getPage.onclick = ()=>{
    if(n<3){
        n= n + 1;
        console.log(n)
        const request = new XMLHttpRequest();
        request.open('GET',`/page${n}`);
        request.onreadystatechange = ()=>{
            if(request.readyState===4 && request.status === 200){
                const array = JSON.parse(request.response);
                console.log(array)
                const result = array.map(item=>`<li>${item.id}</li>`).join('');
                xxx.innerHTML = result;
            } 
        }
        request.send();         
    }else{
        alert('看光了')
    }
    
}
    