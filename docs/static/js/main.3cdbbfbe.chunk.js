(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getForecastData",(function(){return q})),a.d(n,"getWeather",(function(){return J}));var r,c,o=a(0),i=a.n(o),u=a(28),l=a.n(u),s=(a(61),a(8)),d=a(9),m=a(13),f=a(12),h=a(20),p=a(121),E=a(122),v=a(123),y=a(108),b=a(6),O=(a(41),a(42),function(e){var t=e.city;return i.a.createElement("div",{className:"locationContainer"},i.a.createElement("h1",null,t.split(",")[0]))}),j=a(3),w=a(23),g=a.n(w),D=(a(33),r={},Object(j.a)(r,"cloud","cloud"),Object(j.a)(r,"sun","day-sunny"),Object(j.a)(r,"rain","rain"),Object(j.a)(r,"snow","snow"),Object(j.a)(r,"thunder","day-thunderstorm"),Object(j.a)(r,"drizzle","day-showers"),r),C=function(e){var t=e.temperature,a=e.weatherState;return i.a.createElement("div",{className:"weatherTemperatureContainer"},function(e){var t=D[e];return t?i.a.createElement(g.a,{className:"wicon",name:t,size:"4x"}):i.a.createElement(g.a,{className:"wicon",name:"meteor",size:"4x"})}(a),i.a.createElement("span",{className:"temperature"}," ".concat(t)),i.a.createElement("span",{className:"temperatureType"}," \xbaC"))},T=function(e){var t=e.humidity,a=e.wind;return i.a.createElement("div",{className:"weatherExtraInfoContainer"},i.a.createElement("span",{className:"extraInfoText"},"Humedad: ".concat(t,"%")),i.a.createElement("span",{className:"extraInfoText"},"Vientos: ".concat(a)))},S=function(e){var t=e.data,a=t.temperature,n=t.weatherState,r=t.humidity,c=t.wind;return i.a.createElement("div",{className:"weatherDataContainer"},i.a.createElement(C,{temperature:a,weatherState:n}),i.a.createElement(T,{humidity:r,wind:c}))},x=(a(68),c={},Object(j.a)(c,"sun","day-sunny"),Object(j.a)(c,"cloud","cloud"),Object(j.a)(c,"snow","snow"),Object(j.a)(c,"rain","rain"),Object(j.a)(c,"thunder","day-thunderstorm"),Object(j.a)(c,"drizzle","day-showers"),c),I=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).GenerateNextIcon=function(){var e=n.state.currentIconPos;++e>Object.keys(x).length-1&&(e=0),n.setState({currentIconPos:e})},n.GetCurrentIcon=function(){var e=n.state.currentIconPos,t=n.props.size,a=void 0===t?"4x":t,r=x[Object.keys(x)[e]];return i.a.createElement(g.a,{className:"wicon",name:r,size:a})},n.state={currentIconPos:0,intervalID:0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=setInterval(this.GenerateNextIcon,150);this.setState({intervalID:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalID)}},{key:"shouldComponentUpdate",value:function(e,t){return t.currentIconPos!==this.state.currentIconPos}},{key:"render",value:function(){return i.a.createElement("div",{className:"myWeatherProgressIndicator"},this.GetCurrentIcon())}}]),a}(i.a.Component),k=a(30),N=function(){var e=Object(o.useState)((new Date).toLocaleTimeString()),t=Object(k.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){var e=setInterval((function(){n((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[a]),i.a.createElement("div",null,a)},_=function(e){var t=e.city,a=e.data,n=e.onWeatherLocationClick;return i.a.createElement("div",{className:"weatherLocationContainer",onClick:n},i.a.createElement(O,{city:t}),a?i.a.createElement(S,{data:a}):i.a.createElement(I,null))},W=function(e){var t=e.cities,a=e.onSelectedLocation;return i.a.createElement("div",{className:"locationList"},t.map((function(e){return i.a.createElement(_,{key:e.key,city:e.name,data:e.data,onWeatherLocationClick:function(){return function(e){a(e)}(e.name)}})})))},L=function(e){var t=e.weekDay,a=e.hour,n=e.data;return i.a.createElement("div",null,i.a.createElement("h2",null,t," - ",a," hs"),i.a.createElement(S,{data:n}))},A=function(e){var t=e.city;t=t&&t.split(",")[0]||t;var a,n=e.forecastData;return a=t&&n?i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"forecastExtendedTitle"},"Pron\xf3stico extendido para ",t),function(e){return e.map((function(e){var t=e.weekDay,a=e.hour,n=e.data;return i.a.createElement(L,{key:t+a,weekDay:t,hour:a,data:n})}))}(n)):t&&!n?i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"forecastExtendedTitle"},"Cargando pron\xf3stico extendido para ",t),i.a.createElement(I,{size:"2x"})):i.a.createElement("h4",{className:"forecastExtendedTitle"},"Seleccione una ciudad para ver el pron\xf3stico extendido"),i.a.createElement("div",null,a)},z=a(19),F="f99bbd9e4959b513e9bd0d7f7356b38d",P=function(e){return"".concat("https://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&appid=").concat(F)},R=function(e){return"".concat("https://api.openweathermap.org/data/2.5/forecast","?q=").concat(e,"&appid=").concat(F)},G=a(16),Y=a.n(G),B=a(49),H=a.n(B),M=function(e){var t,a=e.main,n=a.temp,r=a.humidity,c=(t=n,Number(H()(t).from("K").to("C").toFixed(0))),o=function(e){var t=e.id;return t<300?"thunder":t<400?"drizzle":t<600?"rain":t<700?"snow":800===t?"sun":"cloud"}(e.weather[0]),i=e.wind.speed;return{temperature:c,weatherState:o,humidity:r,wind:"".concat(i," m/s")}},U=(a(105),function(e){return e.list.filter((function(e){return 6===Y.a.unix(e.dt).hour()||12===Y.a.unix(e.dt).hour()||18===Y.a.unix(e.dt).hour()})).map((function(e){return{weekDay:Y.a.unix(e.dt).format("ddd"),hour:Y.a.unix(e.dt).hour(),data:M(e)}}))}),q=function(e){return function(t,a){t({type:"SET_SELECTED_CITY",payload:e});var n=a(),r=n.cities[e]&&n.cities[e].forecastDataDate,c=new Date;r&&c-r<6e4||fetch(R(e)).then((function(e){return e.json()})).then((function(a){if(a&&a.cod&&"200"===a.cod){var n=U(a);t(function(e){return{type:"SET_FORECAST_DATA",payload:e}}({city:e,forecastData:n}))}else console.log("getForecastData -> Se produjo un error al obtener datos del servidor para la ciudad: ".concat(e),a&&a.message&&a.message)})).catch((function(t){return console.log("getForecastData -> Se produjo un error al obtener datos del servidor para la ciudad: ".concat(e),t)}))}},J=function(e){return function(t){e.forEach((function(e){t({type:"GET_WEATHER_CITY",payload:e}),fetch(P(e)).then((function(e){return e.json()})).then((function(a){var n=null;a&&a.cod&&200===a.cod?n=M(a):console.log("getWeather -> Se produjo un error al obtener datos del servidor para la ciudad: ".concat(e),a&&a.message&&a.message),t(function(e){return{type:"SET_WEATHER_CITY",payload:e}}({city:e,weatherData:n}))})).catch((function(t){return console.log("getWeather -> Se produjo un error al obtener datos del servidor para la ciudad: ".concat(e),t)}))}))}},V=a(14),X=a(50),K=a.n(X),$=Object(V.a)((function(e){return t=e,K()(t).map((function(e){var t=Object(k.a)(e,2),a=t[0];return{key:a,name:a,data:t[1].weather}}));var t}),(function(e){return e})),Q=a(18),Z=Object(V.a)((function(e,t){return e[t]&&e[t].forecastData}),(function(e){return e})),ee=Object(b.c)({selectedCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_CITY":return t.payload;default:return e}},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORECAST_DATA":var a=t.payload,n=a.city,r=a.forecastData;return Object(Q.a)({},e,Object(j.a)({},n,Object(Q.a)({},e[n],{forecastData:r,forecastDataDate:new Date})));case"GET_WEATHER_CITY":var c=t.payload;return Object(Q.a)({},e,Object(j.a)({},c,Object(Q.a)({},e[c],{weather:null})));case"SET_WEATHER_CITY":var o=t.payload,i=o.city,u=o.weatherData;return Object(Q.a)({},e,Object(j.a)({},i,Object(Q.a)({},e[i],{weather:u})));default:return e}}}),te=Object(V.a)((function(e){return e.selectedCity}),(function(e){return e})),ae=Object(V.a)((function(e){return e.cities}),te,Z),ne=Object(V.a)((function(e){return e.cities}),$),re=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSelectedLocation=function(t){e.props.getForecastData(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getWeather)(e.cities)}},{key:"render",value:function(){return i.a.createElement(W,{cities:this.props.citiesWeather,onSelectedLocation:this.handleSelectedLocation})}}]),a}(o.Component),ce=Object(z.b)((function(e){return{citiesWeather:ne(e)}}),(function(e){return Object(b.b)(n,e)}))(re),oe=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.selectedCity,a=e.forecastData;return i.a.createElement(A,{key:t,city:t,forecastData:a})}}]),a}(o.Component),ie=Object(z.b)((function(e){return{selectedCity:te(e),forecastData:ae(e)}}),null)(oe),ue=(a(106),["Barcelona,es","Bogota,col","Buenos Aires,ar","Lima,pe","Madrid,es","Mexico,mex","Santiago,cl","Washington,us"]),le=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.Grid,null,i.a.createElement(h.Row,null,i.a.createElement(p.a,{position:"sticky"},i.a.createElement(E.a,null,i.a.createElement(v.a,{variant:"h4",color:"inherit",style:{flexGrow:1}},"Weather App"),i.a.createElement(N,null)))),i.a.createElement(h.Row,null,i.a.createElement(h.Col,{xs:12,md:6},i.a.createElement(ce,{cities:ue})),i.a.createElement(h.Col,{xs:12,md:6},i.a.createElement(y.a,{elevation:4},i.a.createElement("div",{className:"details"},i.a.createElement(ie,null)))))))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(54),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,me=Object(b.e)(ee,{selectedCity:"",cities:{}},de(Object(b.a)(se.a)));l.a.render(i.a.createElement(z.a,{store:me},i.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},33:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},56:function(e,t,a){e.exports=a(107)},61:function(e,t,a){},68:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.3cdbbfbe.chunk.js.map