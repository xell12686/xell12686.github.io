(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.abbd65c2.svg"},,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/circle-loading.aa5df807.gif"},function(e,t,a){e.exports=a.p+"static/media/user.4b7620c7.svg"},function(e,t,a){e.exports=a.p+"static/media/200.56432189.jpg"},function(e,t,a){e.exports=a.p+"static/media/225.9194ebe5.jpg"},function(e,t,a){e.exports=a.p+"static/media/230.5573ce46.jpg"},function(e,t,a){e.exports=a.p+"static/media/300.aec1ffa0.jpg"},function(e,t,a){e.exports=a.p+"static/media/350.273cce89.jpg"},function(e,t,a){e.exports=a.p+"static/media/400.8c59e434.jpg"},function(e,t,a){e.exports=a.p+"static/media/500.17712885.jpg"},function(e,t,a){e.exports=a.p+"static/media/600.e68f94ad.jpg"},function(e,t,a){e.exports=a.p+"static/media/630.e0ff028c.jpg"},function(e,t,a){e.exports=a.p+"static/media/700.f336a9ed.jpg"},function(e,t,a){e.exports=a.p+"static/media/fb.422e7665.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.88c38bdc.svg"},function(e,t,a){e.exports=a.p+"static/media/youtube.bc771c00.svg"},function(e,t,a){e.exports=a.p+"static/media/ig.91a8e68d.svg"},,function(e,t,a){e.exports=a(42)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),s=a.n(r),c=a(1),l=a(2),i=a(4),u=a(3),d=a(5),m=a(7),p=(a(34),function(e){var t=e.user;return e.donations.length?o.a.createElement("span",{className:"Welcome"},"Hi ",o.a.createElement("strong",null,t),", here are your donations so far:"):o.a.createElement("span",{className:"Welcome"},"Hi ",o.a.createElement("strong",null,t),", you don't have donations yet.")}),h=function(e){return e.donations.map(function(e){var t=e.petId,a=e.petName,n=e.label,r=e.donatedAmount;return a=a||"an anynomous Pet",o.a.createElement("div",{className:"donation-item",key:t},o.a.createElement("span",{className:"donation-name"},"TO: ",n||a),o.a.createElement("span",{className:"donation-amount"}," $",r))})},f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.detailedDonations;return o.a.createElement("div",{className:"Donations"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col donations-list text-center"},o.a.createElement(p,{user:t,donations:a}),a.length?o.a.createElement(h,{donations:a}):""))))}}]),t}(n.Component);f.defaultProps={user:null,detailedDonations:[]};a(9);var g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleSignIn=function(e){e.preventDefault();var t=a.refs.username.value,n=a.refs.password.value;a.props.onSignIn(t,n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSignIn},o.a.createElement("h3",null,"Sign in"),o.a.createElement("input",{type:"text",ref:"username",placeholder:"enter you username",defaultValue:"tony_stark",required:!0}),o.a.createElement("input",{type:"password",ref:"password",placeholder:"enter password",disabled:!0}),o.a.createElement("input",{type:"submit",value:"Go!"}))}}]),t}(n.Component);g.defaultProps={onSignIn:function(){}};var v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.onSignOut,n=e.detailedDonations,r=e.onSignIn;return o.a.createElement("div",{className:"UserInfo"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col box"},t?o.a.createElement(f,{user:t,onSignOut:a,detailedDonations:n}):o.a.createElement(g,{onSignIn:r})))))}}]),t}(n.Component);v.defaultProps={user:"",detailedDonations:[],onSignIn:function(){},onSignOut:function(){}};var E=a(11),b=a.n(E),N=function(e){var t=e.message;return o.a.createElement("div",{className:"LoadingCircle wrapper"},o.a.createElement("div",{className:"box"},o.a.createElement("h3",null,t),o.a.createElement("img",{src:b.a,alt:"loading.."})))},D=a(6),j=a.n(D),O=a(12),y=a.n(O),P=function(e,t,a,n){var o=n.find(function(t){return t.petId===e});return o?Object(m.a)({},o,{donatedAmount:t,label:a}):{petId:e,donatedAmount:t,label:a}},w=function(e){var t=e.user,a=e.onSignOut;return o.a.createElement("div",{className:"col user-info"},o.a.createElement("button",{onClick:a},"Sign out"),o.a.createElement("img",{src:y.a,className:"user-icon",alt:"logo"}),o.a.createElement("span",{className:"user-name"},t))},C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:"",userDonations:[],loading:!1},a.signIn=function(e,t){fetch("./data-users.json").then(function(e){return e.json()}).then(function(t){a.setState({loading:!0});var n=t.find(function(t){return e.toLowerCase()===t.userName});n&&n.donations&&a.setState({userDonations:n.donations}),setTimeout(function(){a.setState({user:e,loading:!1}),a.props.handleUpdateUser(e,a.state.userDonations)},1e3)})},a.signOut=function(){a.setState({user:"",userDonations:[]}),a.props.handleUpdateUser("",[]),console.log("user signed out")},a.getDonationDetails=function(){return a.state.userDonations.map(function(e){var t=e.petId,n=e.donatedAmount,o=e.label;return P(t,n,o,a.props.lostPets)})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.props.lostPets,n=this.state,o=n.user,r=n.loading;return a!==e.lostPets||o!==t.user||r!==t.loading}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){console.log("RENDER: Header");var e=this.state,t=e.user,a=e.loading,n=this.getDonationDetails();return o.a.createElement("header",{className:"Header"},o.a.createElement("div",{className:"top-bar"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col branding"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:j.a,className:"app-logo",alt:"logo"}),o.a.createElement("h2",{className:"app-title"},"LostPetFund"))),t&&o.a.createElement(w,{user:t,onSignOut:this.signOut})))),a?o.a.createElement(N,{message:"Loading Donations"}):o.a.createElement(v,{onSignIn:this.signIn,user:t,detailedDonations:n}))}}]),t}(n.Component);C.defaultProps={lostPets:[],handleUpdateUser:function(){}};var S=a(27),k=(a(35),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={filterRegion:"All",orderBy:"petName"},a.changeFilter=function(e){a.setState({filterRegion:e.target.value}),a.props.handleChangeRegion(e.target.value)},a.changeOrder=function(e){a.setState({orderBy:e.target.value}),a.props.handleChangeOrder(e.target.value)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.filterRegion,a=e.orderBy,n=this.props.regions.map(function(e,a){return o.a.createElement("option",{key:a,value:e,className:t===e?"active":""},e)});return o.a.createElement("div",{className:"FilterCards"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h2",{className:"title"},"Lost and Found Pets"),o.a.createElement("div",{className:"filter"},o.a.createElement("label",null,o.a.createElement("span",{className:"dropdown-label"},"Filter by region:"),o.a.createElement("select",{value:t,onChange:this.changeFilter},o.a.createElement("option",{value:"All",className:"All"===t?"active":""},"All"),n))),o.a.createElement("div",{className:"sort"},o.a.createElement("label",null,o.a.createElement("span",{className:"dropdown-label"},"Sort by:"),o.a.createElement("select",{value:a,onChange:this.changeOrder},o.a.createElement("option",{value:"petName",className:"petName"===a?"active":""},"Pet Name"),o.a.createElement("option",{value:"dateLost",className:"dateLost"===a?"active":""},"Date the pet was lost"))))))}}]),t}(n.Component));k.defaultProps={regions:[],handleChangeOrder:function(){},handleChangeRegion:function(){}};a(36);var x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).sendDonation=function(e){console.log("sending donation of "+e+"..."),a.props.handleSendDonation(e)},a.state={donationLabel:"",loading:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.handleCancelDonation;return o.a.createElement("div",{className:"DonationForm"},o.a.createElement("button",{onClick:function(){return e.sendDonation(10)}},"Send"),o.a.createElement("button",{onClick:t},"Cancel"),this.state.loading&&o.a.createElement(N,{message:"Sending donation..."}))}}]),t}(n.Component);x.defaultProps={handleSendDonation:function(){},handleCancelDonation:function(){}};a(37);var I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={animate:!1},a.closeModal=function(){a.setState({animate:!1}),setTimeout(function(){a.props.handleClose()},250)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({animate:!0})},0)}},{key:"render",value:function(){var e=this.state.animate?"in":"outx";return o.a.createElement("div",{className:"Modal"},o.a.createElement("section",{className:"modal-main "+e},"below is form to donate to pet #: ",this.props.petId,o.a.createElement(x,{handleSendDonation:this.props.handleReceiveDonation,handleCancelDonation:this.closeModal}),o.a.createElement("button",{onClick:this.closeModal},"Close")))}}]),t}(n.Component);I.defaultProps={content:"",petId:"",handleReceiveDonation:function(){}};a(38);var L=a(13),A=a.n(L),M=a(14),U=a.n(M),R=a(15),T=a.n(R),B=a(16),F=a.n(B),H=a(17),q=a.n(H),J=a(18),W=a.n(J),Y=a(19),$=a.n(Y),G=a(20),V=a.n(G),_=a(21),z=a.n(_),K=a(22),Q=a.n(K),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showModal:!1,petToDonate:""},a.showDonationModal=function(e){a.setState({showModal:!0,petToDonate:e})},a.hideModal=function(){return a.setState({showModal:!1})},a.receiveDonation=function(e){a.props.handleMakeDonation(a.state.petToDonate,e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var a=this.state,n=a.showModal,o=a.petToDonate,r=this.props.lostPets;return n!==t.showModal||o!==t.petToDonate||r!==e.lostPets}},{key:"render",value:function(){var e=this;console.log("RENDER: Cards");var t=this.state,a=t.showModal,n=t.petToDonate,r=this.props.lostPets.map(function(t){var a=t.formattedDateLost,n=t.ownerName,r=t.ownerPhone,s=t.petId,c=t.petName,l=t.photo,i=t.region,u=t.type,d=t.donatedStatus,m=r.replace(/[^\d]/g,""),p=a.toLocaleDateString();return o.a.createElement("div",{className:"card-item",key:s},o.a.createElement("div",{className:"wrap"},o.a.createElement("header",null,o.a.createElement("h2",{className:"title"},o.a.createElement("span",{className:"pet-name"},c)," -- ",o.a.createElement("span",{className:"pet-id"},"#",t.petId)),o.a.createElement("button",{className:"btn small share"},"Share")),o.a.createElement("section",{className:"content"},o.a.createElement("div",{className:"photo"},o.a.createElement("img",{src:function(){switch(l){case"200.jpg":return A.a;case"225.jpg":return U.a;case"230.jpg":return T.a;case"300.jpg":return F.a;case"350.jpg":return q.a;case"400.jpg":return W.a;case"500.jpg":return $.a;case"600.jpg":return V.a;case"630.jpg":return z.a;default:return Q.a}}(),alt:"kitten"})),o.a.createElement("div",{className:"data"},o.a.createElement("ul",null,o.a.createElement("li",{className:"date-lost"},o.a.createElement("b",null,"Date Lost:"),o.a.createElement("span",null,p)),o.a.createElement("li",{className:"pet-type"},o.a.createElement("b",null,"Type:"),o.a.createElement("span",null,u)),o.a.createElement("li",{className:"owner-name"},o.a.createElement("b",null,"Owner:"),o.a.createElement("span",null,n||"Anonymous")),o.a.createElement("li",{className:"locality"},o.a.createElement("b",null,"Region:"),o.a.createElement("span",null,i)))),o.a.createElement("div",{className:"donate"},o.a.createElement("button",{className:"btn donate-button",onClick:function(){return e.showDonationModal(s)},disabled:!!d},"Doar"))),o.a.createElement("footer",null,o.a.createElement("a",{href:"tel:"+m,className:"call-now"},"(Phone) Ligar"))))});return o.a.createElement("div",{className:"Cards"},a&&o.a.createElement(I,{showModal:a,petId:n,handleClose:this.hideModal,handleReceiveDonation:this.receiveDonation}),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"cards-list"},r)))}}]),t}(n.Component);X.defaultProps={lostPets:[],handleMakeDonation:function(e,t){}};a(39);var Z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).changePage=function(e){a.props.handlePaginate(e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this,t=this.props,a=t.totalCards,n=t.cardsPerPage,r=t.currentPage,s=[],c=Math.ceil(a/n),l=1;l<=c;l++)s.push(l);var i=r-1,u=r+1;return o.a.createElement("div",{className:"Pagination"},1!==r&&o.a.createElement("button",{onClick:function(){return e.changePage(i)}},"<"),1!==c&&s.map(function(t){return o.a.createElement("button",{key:t,className:r===t?"active":"",onClick:function(){return e.changePage(t)},disabled:r===t},t)}),r!==c&&o.a.createElement("button",{onClick:function(){return e.changePage(u)}},">"))}}]),t}(n.Component);Z.defaultProps={cardsPerPage:"",totalCards:"",currentPage:"",handlePaginate:function(){}};var ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={lostPets:[],regions:[],queryText:"",orderBy:"petName",orderDir:"asc",loading:!1,petToDonate:"",currentPage:1,cardsPerPage:6},a.updatePetDonationStatus=function(e){console.log("MeTHOD updatePetdonationstatus() RAN");var t=a.props.userDonations.map(function(e){return e.petId});console.log("donated IS: "+t),e.forEach(function(e){t.includes(e.petId)&&(e.donatedStatus=!0)})},a.makeDonation=function(e,t){var n=a.props.user,o=a.state.lostPets,r=o.findIndex(function(t){return t.petId===e});o[r].donatedStatus=!0,a.props.handleUpdateCards(o),console.log("updated pets from new donation...");var s=a.state.userDonations;a.props.handleUpdateDonations(s),console.log("user "+n+"donated $"+t+" to petID:"+e)},a.changeOrder=function(e){var t="dateLost"===e?"desc":"asc";a.setState({orderBy:e,orderDir:t})},a.changeRegion=function(e){"All"===e&&(e=""),a.setState({queryText:e,currentPage:1})},a.paginate=function(e){return a.setState({currentPage:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("./data-lostpets.json").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){var t=e.dateLost,a=t.year,n=t.month,o=t.day,r=new Date(a,n,o);return Object(m.a)({},e,{formattedDateLost:r,donatedStatus:!1})}),n=t.map(function(e){return e.region}),o=Object(S.a)(new Set(n));e.props.handleUpdateCards(a),e.setState({lostPets:a,regions:o}),setTimeout(function(){e.setState({loading:!1})},1e3)})}},{key:"render",value:function(){var e,t=this;console.log("RENDER: Body"),this.props.userDonations.length&&this.state.lostPets.length?(console.log("Trigger by BODY: updatePetDonationStatus"),this.updatePetDonationStatus(this.state.lostPets)):console.log("inside BODY: no User donations yet"),e="asc"===this.state.orderDir?1:-1;var a=this.state.lostPets;a=a.sort(function(a,n){return"dateLost"===t.state.orderBy?a.formattedDateLost>n.formattedDateLost?1*e:-1*e:a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e}).filter(function(e){return e.region.toLowerCase().includes(t.state.queryText.toLowerCase())});var n=this.state,r=n.loading,s=n.regions,c=n.currentPage,l=n.cardsPerPage,i=c*l,u=i-l,d=a.slice(u,i);return o.a.createElement("main",{className:"App-body"},o.a.createElement(k,{handleChangeOrder:this.changeOrder,handleChangeRegion:this.changeRegion,regions:s}),r?o.a.createElement(N,{message:"Loading Pets"}):o.a.createElement(X,{lostPets:d,handleMakeDonation:this.makeDonation}),o.a.createElement(Z,{cardsPerPage:l,currentPage:c,totalCards:a.length,handlePaginate:this.paginate}))}}]),t}(n.Component);ee.defaultProps={user:"",userDonations:[],handleUpdateCards:function(e){},handleUpdateDonations:function(e){}};a(40);var te=a(23),ae=a.n(te),ne=a(24),oe=a.n(ne),re=a(25),se=a.n(re),ce=a(26),le=a.n(ce),ie=function(e){return o.a.createElement("footer",{className:"Footer"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col branding"},o.a.createElement("img",{src:j.a,className:"app-logo",alt:"logo"}),o.a.createElement("h2",{className:"app-title"},"LostPetFund"),o.a.createElement("span",null,"\xa9 2019")),o.a.createElement("div",{className:"col social-links"},o.a.createElement("a",{href:"facebook.com",className:"link-item",target:"blank"},o.a.createElement("img",{src:ae.a,className:"app-logo",alt:"logo"})),o.a.createElement("a",{href:"twitter.com",className:"link-item",target:"blank"},o.a.createElement("img",{src:oe.a,className:"app-logo",alt:"logo"})),o.a.createElement("a",{href:"instagram.com",className:"link-item",target:"blank"},o.a.createElement("img",{src:le.a,className:"app-logo",alt:"logo"})),o.a.createElement("a",{href:"youtube.com",className:"link-item",target:"blank"},o.a.createElement("img",{src:se.a,className:"app-logo",alt:"logo"}))))))},ue=(a(41),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={cards:[],user:"",userDonations:[]},a.updateUser=function(e,t){a.setState({user:e,userDonations:t});var n=a.state.cards.map(function(e){return delete e.donatedStatus,e});a.setState({cards1:n})},a.updateDonations=function(e){var t=a.state.cards;console.log("updateDonations() ran from App"),a.setState({userDonations:e,cards:t})},a.updateCards=function(e){a.setState({cards:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.user,a=e.cards,n=e.userDonations;return o.a.createElement("div",{className:"App"},o.a.createElement(C,{lostPets:a,handleUpdateUser:this.updateUser}),o.a.createElement(ee,{user:t,userDonations:n,handleUpdateCards:this.updateCards,handleUpdatePet:this.updatePet,handleUpdateDonations:this.updateDonations}),o.a.createElement(ie,null))}}]),t}(n.Component));s.a.render(o.a.createElement(ue,null),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.c62e9931.chunk.js.map