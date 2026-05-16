const chart=echarts.init(document.getElementById("polar-chart-container"));const projects={"Artificial Intelligence & Machine Learning":["Neural Style Transfer","Fraud Detection AI","Recommendation Engine",],"Generative AI & LLM Engineering":["Custom GPT Agent","RAG Pipeline","AI Code Generator",],"Data Structures & Algorithms":["Graph Visualizer","Pathfinding Engine","Competitive Toolkit",],"Full-Stack Engineering":["Realtime Chat App","E-Commerce Platform","AI Dashboard",],"System Design & Distributed Systems":["Distributed Cache","Load Balancer","Microservices Platform",],"Cloud Computing & DevOps":["CI/CD Pipeline","Kubernetes Deployment","Dockerized AI Stack",],"Database Engineering":["Distributed Database","Realtime Analytics DB","SQL Optimizer",],"Operating Systems & Systems Programming":["Mini Kernel","Shell Emulator","Thread Pool Engine",],"Networking & Internet Infrastructure":["Custom HTTP Server","DNS Resolver","Packet Sniffer",],"Data Engineering":["ETL Pipeline","Streaming Analytics","Realtime Data Lake",],"Application Development":["Cross Platform App","Video Streaming App","Task Manager",],"Mathematics & Research Foundations":["Optimization Simulator","Statistical Toolkit","Research Analyzer",],"Soft Skills":["Tech Talks","Mentorship","Leadership"],"Robotics & Edge Computing":["Autonomous Robot","Edge AI Camera","IoT Monitoring",],"Open-Source Contributions":["GitHub AI Toolkit","Open Source PRs","Developer Libraries",],};const labels=["Artificial\nIntelligence &\nMachine Learning","Generative AI &\nLLM Engineering","Data Structures &\nAlgorithms","Full-Stack\nEngineering","System Design &\nDistributed Systems","Soft Skills","Database\nEngineering","Operating Systems\n& Systems\nProgramming","Networking &\nInternet\nInfrastructure","Data\nEngineering","Application\nDevelopment","Mathematics &\nResearch\nFoundations","Cloud Computing\n& DevOps","Robotics & Edge\nComputing","Open-Source\nContributions",];const labelsMobile=["Artificial\nIntelligence &\nMachine Learning","Generative AI &\nLLM Engineering","Data Structures &\nAlgorithms","Full-Stack\nEngineering","System Design &\nDistributed Systems","Soft Skills","Database\nEngineering","Operating Systems\n& Systems\nProgramming","Networking &\nInternet\nInfrastructure","Data\nEngineering","Application\nDevelopment","Mathematics &\nResearch\nFoundations","Cloud Computing\n& DevOps","Robotics & Edge\nComputing","Open-Source\nContributions",];const originalNames=Object.keys(projects);const values=[75,88,78,60,85,68,28,52,42,38,18,76,74,50,32];function buildOption(){const w=window.innerWidth;const isMobile=w<1024;const isSmall=w<480;return{animation:!0,angleAxis:{type:"category",data:isMobile?labelsMobile:labels,startAngle:90,axisLine:{lineStyle:{color:"#bdbdbd",width:1}},axisTick:{show:!1},axisLabel:{interval:0,color:"#111111",fontSize:isSmall?7:isMobile?10:15,lineHeight:isSmall?9:isMobile?11:15,fontFamily:"AGaramondPro, garamond, sans-serif",rotate:0,},splitLine:{show:!0,lineStyle:{color:"#cfcfcf",width:1}},},radiusAxis:{min:0,max:100,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{lineStyle:{color:"#c8c8c8",type:"solid"}},},polar:{radius:isSmall?"60%":isMobile?"70%":"65%",center:isMobile?["50%","50%"]:["50%","50%"],},tooltip:{trigger:"item",backgroundColor:"rgba(255,255,255,0.72)",borderColor:"#7fe26a",borderWidth:1,extraCssText:`
        backdrop-filter: blur(10px);
      `,textStyle:{color:"#111"},formatter:function(params){const skill=originalNames[params.dataIndex];const projectList=projects[skill];let html=`
          <div style="
            min-width:${isMobile ? "170px" : "240px"};
            padding:${isMobile ? "4px" : "8px"};
            font-family:AGaramondPro, garamond, sans-serif;
          ">
            <div style="
              font-size:${isMobile ? "15px" : "22px"};
              font-weight:700;
              margin-bottom:10px;
              color:#111;
            ">
              ${skill}
            </div>
            <div style="height:1px;background:#d7d7d7;margin-bottom:12px;"></div>
            <div style="
              font-size:${isMobile ? "13px" : "17px"};
              font-weight:700;
              margin-bottom:10px;
            ">
              Projects
            </div>
        `;projectList.forEach((project)=>{html+=`
            <div style="
              font-size:${isMobile ? "12px" : "15px"};
              color:#333;
            ">
              • ${project}
            </div>
          `});html+=`</div>`;return html},},series:[{type:"bar",coordinateSystem:"polar",roundCap:!1,barWidth:isSmall?8:isMobile?11:46,data:values,itemStyle:{borderColor:"#6be060",borderWidth:1.5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(180,255,100,0.95)"},{offset:1,color:"rgba(120,220,100,0.7)"},]),},emphasis:{itemStyle:{shadowBlur:25,shadowColor:"rgba(120,255,120,0.45)"},},},],}}
chart.setOption(buildOption());let resizeTimer;window.addEventListener("resize",()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{chart.setOption(buildOption(),{notMerge:!0});chart.resize()},150)});document.querySelectorAll("[data-nav-link]").forEach((btn)=>{btn.addEventListener("click",()=>{if(btn.textContent.trim().toLowerCase()==="resume"){setTimeout(()=>{chart.setOption(buildOption(),{notMerge:!0});chart.resize()},200)}})})