const jobs=[
 {title:'Frontend Developer',company:'Google',logo:'G',location:'Mumbai, India',type:'Full Time',mode:'On-site',salary:'₹8 - 15 LPA',category:'Software Development'},
 {title:'Software Engineer',company:'Microsoft',logo:'▦',location:'Bangalore, India',type:'Full Time',mode:'Hybrid',salary:'₹10 - 18 LPA',category:'Software Development'},
 {title:'Backend Developer',company:'Amazon',logo:'a',location:'Hyderabad, India',type:'Full Time',mode:'On-site',salary:'₹7 - 14 LPA',category:'Software Development'},
 {title:'UI/UX Designer',company:'Swiggy',logo:'S',location:'Bangalore, India',type:'Full Time',mode:'Hybrid',salary:'₹7 - 12 LPA',category:'Design'},
 {title:'Data Scientist',company:'TCS',logo:'T',location:'Pune, India',type:'Full Time',mode:'Hybrid',salary:'₹8 - 16 LPA',category:'Data Science'},
 {title:'Java Developer',company:'Infosys',logo:'I',location:'Delhi, India',type:'Full Time',mode:'On-site',salary:'₹6 - 12 LPA',category:'Software Development'}
];
const companies=[['Google','124 Openings','G'],['Microsoft','98 Openings','▦'],['Amazon','87 Openings','a'],['TCS','76 Openings','T'],['Infosys','60 Openings','I']];
const grid=document.getElementById('jobGrid');
const companyList=document.getElementById('companyList');
function renderJobs(list=jobs){
 grid.innerHTML=list.length?list.map((j,i)=>`<article class="job-card" data-index="${i}"><div class="job-top"><span class="company-logo">${j.logo}</span><button class="bookmark" title="Save job" aria-label="Save ${j.title}">♡</button></div><h3>${j.title}</h3><div class="company">${j.company}</div><div class="job-meta"><span>⌖ ${j.location}</span><span class="pill green">${j.type}</span><span class="pill">${j.mode}</span></div><div class="salary">${j.salary}</div></article>`).join(''):`<div class="no-results">No jobs found. Try another keyword or location.</div>`;
 document.querySelectorAll('.job-card').forEach(card=>card.addEventListener('click',()=>openJob(jobs[Number(card.dataset.index)])));
 document.querySelectorAll('.bookmark').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();btn.textContent=btn.textContent==='♡'?'♥':'♡'}));
}
function renderCompanies(){companyList.innerHTML=companies.map(c=>`<div class="company-row"><span>${c[2]}</span><strong>${c[0]}</strong><small>${c[1]}</small></div>`).join('')}
function search(){const q=document.getElementById('keyword').value.toLowerCase().trim();const loc=document.getElementById('location').value.toLowerCase().trim();const cat=document.getElementById('category').value;const result=jobs.filter(j=>(!q||[j.title,j.company,j.category,j.location].some(x=>x.toLowerCase().includes(q)))&&(!loc||j.location.toLowerCase().includes(loc)||j.mode.toLowerCase().includes(loc))&&(!cat||j.category===cat));renderJobs(result);document.getElementById('jobs').scrollIntoView({behavior:'smooth'});}
document.getElementById('searchForm').addEventListener('submit',e=>{e.preventDefault();search()});
document.querySelectorAll('[data-search]').forEach(el=>el.addEventListener('click',()=>{document.getElementById('keyword').value=el.dataset.search;search()}));
document.getElementById('viewAll').addEventListener('click',()=>{document.getElementById('keyword').value='';document.getElementById('location').value='';document.getElementById('category').value='';renderJobs(jobs);document.getElementById('jobs').scrollIntoView({behavior:'smooth'});});
const modal=document.getElementById('modal');const title=document.getElementById('modalTitle');const text=document.getElementById('modalText');
function openModal(mode='register'){title.textContent=mode==='login'?'Welcome Back':'Create Your JobFinder Profile';text.textContent=mode==='login'?'Login to save jobs and track your applications.':'Create an account to save jobs and track applications.';modal.classList.add('show');modal.setAttribute('aria-hidden','false')}
function openJob(j){title.textContent=j.title;text.innerHTML=`<strong>${j.company}</strong> · ${j.location}<br>${j.type} · ${j.mode}<br><br><strong>${j.salary}</strong>`;document.getElementById('modalForm').innerHTML=`<p style="margin:0">Build your profile to apply for this opportunity.</p><button class="btn btn-primary" type="button" id="applyBtn">Apply Now</button>`;modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.getElementById('applyBtn').onclick=()=>{alert('Application demo submitted successfully!');modal.classList.remove('show')}}
document.getElementById('loginBtn').onclick=()=>openModal('login');document.getElementById('registerBtn').onclick=()=>openModal('register');document.getElementById('ctaBtn').onclick=()=>openModal('register');document.getElementById('modalClose').onclick=()=>modal.classList.remove('show');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
document.getElementById('modalForm').addEventListener('submit',e=>{e.preventDefault();alert('Demo account created successfully!');modal.classList.remove('show')});
document.getElementById('themeBtn').onclick=()=>{document.body.classList.toggle('dark');document.getElementById('themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾'};
document.getElementById('menuBtn').onclick=()=>{const nav=document.querySelector('.nav-links');const visible=getComputedStyle(nav).display!=='none';nav.style.display=visible?'none':'flex';nav.style.position='absolute';nav.style.top='64px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='var(--card)';nav.style.flexDirection='column';nav.style.alignItems='center';nav.style.zIndex='30'};
renderJobs();renderCompanies();
