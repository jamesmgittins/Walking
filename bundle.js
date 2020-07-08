!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){e.exports=THREE},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(2);const r=t(0),i=t(6),a=t(8),o=t(9),s=new r.Scene;let c=new i.Terrain(s,3);const l=new o.Controls,d=new a.MyCamera(s,l,c);l.camera=d;const u=new r.WebGLRenderer;u.setClearColor("#606060"),u.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(u.domElement);let f=new r.PointLight(16777181,.5,500);f.position.set(0,0,80),s.add(f);let m=new r.AmbientLight(2105376);s.add(m);var p=0,g=0;let h=0,v=0;!function e(){requestAnimationFrame(e),function(){h=Date.now();let e=Math.min((h-v)/1e3,1);v=h,function(){if(60==++p){var e=document.getElementById("fps"),n=document.getElementById("posX"),t=document.getElementById("posY"),r=document.getElementById("calls");if(e){var i=1e3/((h-g)/60);e.innerText=Math.round(i).toString(),n.innerText=f.position.x.toFixed(2),t.innerText=f.position.y.toFixed(2),r.innerText=u.info.render.calls.toString(),g=h,p=0}}}(),c.updateChunks(e,d.camera),d.handleCameraMove(e),d.setLightPosition(f),u.render(s,d.camera)}()}(),window.onresize=function(){d.camera.aspect=window.innerWidth/window.innerHeight,d.camera.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}},function(e,n,t){var r=t(3),i=t(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,n,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function s(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var a=e[i],c=n.base?a[0]+n.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:h(f,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function f(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function m(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function h(e,n){var t,r,i;if(n.singleton){var a=g++;t=p||(p=l(n)),r=f.bind(null,t,a,!1),i=f.bind(null,t,a,!0)}else t=l(n),r=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=s(t[r]);o[i].references--}for(var a=c(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=a}}}},function(e,n,t){(n=t(5)(!1)).push([e.i,"/* Styles go here. */\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\ncanvas {\r\n  display: block;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}var o,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Terrain=void 0;const r=t(0),i=t(7),a=4.3,o=5,s=4,c=25;var l=c-(s+(c-s)/4);const d=64,u=64;noise.seed(1024);const f=(new r.TextureLoader).load("img/grass.png"),m=(new r.TextureLoader).load("img/gravel.png"),p=(new r.TextureLoader).load("img/sand.png"),g=(new r.TextureLoader).load("img/water.png"),h=(new r.TextureLoader).load("img/snow.png");g.wrapS=r.MirroredRepeatWrapping,g.wrapT=r.MirroredRepeatWrapping,m.wrapS=h.wrapS=p.wrapS=f.wrapS=r.RepeatWrapping,m.wrapT=h.wrapT=p.wrapT=f.wrapT=r.RepeatWrapping,m.magFilter=h.magFilter=p.magFilter=f.magFilter=r.NearestFilter;const v=r.UniformsUtils.merge([r.ShaderLib.phong.uniforms]);v.texture1={type:"t",value:g},v.time={type:"f",value:1},v.amp={type:"f",value:.004};const _=new r.ShaderMaterial({uniforms:v,vertexShader:i.MyShaders.WaterVertexShader,fragmentShader:i.MyShaders.WaterFragmentShader,transparent:!0,lights:!0}),x=r.UniformsUtils.merge([r.ShaderLib.standard.uniforms]);x.grassTexture={type:"t",value:f},x.sandTexture={type:"t",value:p},x.snowTexture={type:"t",value:h},x.gravelTexture={type:"t",value:m},x.waterHeight={type:"f",value:a+.5},x.sandHeight={type:"f",value:o+.5},x.snowHeight={type:"f",value:c+3},x.gravelHeight={type:"f",value:l};const y=new r.ShaderMaterial({uniforms:x,vertexShader:i.MyShaders.LandVertexShader,fragmentShader:i.MyShaders.LandFragmentShader,lights:!0});var w=new r.PlaneBufferGeometry(320,320,480,1),b=new r.Mesh(w,_);b.position.z=a+.55;var k=new r.PlaneBufferGeometry(6400,6400,1,1),M=new r.Mesh(k,new r.MeshPhongMaterial({map:g}));M.position.z=a+.5;class L{constructor(e,n){this.x=e,this.y=n,this.geo=new r.PlaneBufferGeometry(d,u,d,u),this.planeMesh=new r.Mesh(this.geo,y),this.discarded=!1}}n.Terrain=class{constructor(e,n){this.chunkRange=1,this.chunks=[],this.chunkMap=[],this.discardedChunks=[],this.lastCubeCenter={x:1,y:1},this.chunkRange=n,this.scene=e,e.add(M),e.add(b)}getHeight(e,n){var t=25*noise.simplex2(e/100,n/100)+25+1.5*noise.simplex2(e/8,n/8)+30*noise.simplex2(e/1200,n/1200)+5,r=s+(t-s)/4;return t>c?Math.pow(r,1.4)-13.5:r}isWater(e){return e<a+.55}createChunkObject(e,n){if(this.discardedChunks.length>0){let t=this.discardedChunks.pop();return t.x=e,t.y=n,t.discarded=!1,t}let t=new L(e,n);return this.scene.add(t.planeMesh),t}fixChunkNormals(e){e.geo.computeBoundingSphere(),e.geo.computeVertexNormals();let n,t,r,i=d+1,a=u+1,o=e.geo.getAttribute("normal");if(this.chunkMap[e.x-d]&&this.chunkMap[e.x-d][e.y]){n=this.chunkMap[e.x-d][e.y],t=n.geo.getAttribute("normal");for(let e=0;e<a;e++)r=(i-1)*a+e,o.setXYZ(e,t.getX(r),t.getY(r),t.getZ(r))}if(this.chunkMap[e.x+d]&&this.chunkMap[e.x+d][e.y]){n=this.chunkMap[e.x+d][e.y],t=n.geo.getAttribute("normal");for(let e=0;e<a;e++)r=e,o.setXYZ((i-1)*a+e,t.getX(r),t.getY(r),t.getZ(r))}if(this.chunkMap[e.x]&&this.chunkMap[e.x][e.y+u]){n=this.chunkMap[e.x][e.y+u],t=n.geo.getAttribute("normal");for(let e=0;e<i;e++)r=e*a,o.setXYZ(e*a+(i-1),t.getX(r),t.getY(r),t.getZ(r))}if(this.chunkMap[e.x]&&this.chunkMap[e.x][e.y-u]){n=this.chunkMap[e.x][e.y-u],t=n.geo.getAttribute("normal");for(let e=0;e<i;e++)r=e*a+(i-1),o.setXYZ(e*a,t.getX(r),t.getY(r),t.getZ(r))}e.geo.getAttribute("position").needsUpdate=!0}createChunk(e,n){let t=this.createChunkObject(e,n),r=t.geo.getAttribute("position").array;var i=d+1,a=u+1;for(let t=0;t<i;t++)for(let i=0;i<a;i++){var o=t-d/2+e,s=i-u/2+n;r[3*(t*a+i)]=o,r[3*(t*a+i)+1]=s,r[3*(t*a+i)+2]=this.getHeight(o,s)}this.fixChunkNormals(t),this.chunks.push(t),this.chunkMap[e]||(this.chunkMap[e]=[]),this.chunkMap[e][n]=t}destroyChunk(e){e.discarded=!0,this.discardedChunks.push(e),delete this.chunkMap[e.x][e.y],0==Object.keys(this.chunkMap[e.x]).length&&delete this.chunkMap[e.x]}updateChunks(e,n){v.time.value+=60*e;let t=Math.round(n.position.x),r=Math.round(n.position.y+1.5);if((Math.abs(t-b.position.x)>64||Math.abs(r-b.position.y)>64)&&(M.position.x=b.position.x=t,M.position.y=b.position.y=r),this.lastCubeCenter.x==t&&this.lastCubeCenter.y==r)return;let i=Math.round(t/d)*d,a=Math.round(r/u)*u;var o=i-this.chunkRange*d,s=i+this.chunkRange*d,c=a-this.chunkRange*u;let l=a+this.chunkRange*u;for(var f=0;f<this.chunks.length;f++)if(this.chunks[f].x<o||this.chunks[f].x>s||this.chunks[f].y<c||this.chunks[f].y>l)return this.destroyChunk(this.chunks[f]),void this.chunks.splice(f,1);for(f=-this.chunkRange;f<=this.chunkRange;f++)for(var m=i+f*d,p=-this.chunkRange;p<=this.chunkRange;p++){var g=a+p*u;if(!this.chunkMap[m]||!this.chunkMap[m][g])return void this.createChunk(m,g)}this.lastCubeCenter.x=t,this.lastCubeCenter.y=r}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MyShaders=void 0,n.MyShaders={LandVertexShader:"\n          #define MYLAND\n          varying vec3 vLightFront;\n          varying vec3 vIndirectFront;\n          #ifdef DOUBLE_SIDED\n              varying vec3 vLightBack;\n              varying vec3 vIndirectBack;\n          #endif\n          #include <common>\n          #include <uv_pars_vertex>\n          #include <uv2_pars_vertex>\n          #include <envmap_pars_vertex>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <color_pars_vertex>\n          #include <fog_pars_vertex>\n          #include <morphtarget_pars_vertex>\n          #include <skinning_pars_vertex>\n          #include <shadowmap_pars_vertex>\n          #include <logdepthbuf_pars_vertex>\n          #include <clipping_planes_pars_vertex>\n          varying vec3 vUv;\n          void main() {\n              #include <uv_vertex>\n              #include <uv2_vertex>\n              #include <color_vertex>\n              #include <beginnormal_vertex>\n              #include <morphnormal_vertex>\n              #include <skinbase_vertex>\n              #include <skinnormal_vertex>\n              #include <defaultnormal_vertex>\n              #include <begin_vertex>\n              #include <morphtarget_vertex>\n              #include <skinning_vertex>\n              #include <project_vertex>\n              #include <logdepthbuf_vertex>\n              #include <clipping_planes_vertex>\n              #include <worldpos_vertex>\n              #include <envmap_vertex>\n              #include <lights_lambert_vertex>\n              #include <shadowmap_vertex>\n              #include <fog_vertex>\n  \n              vUv = position;\n          }\n      ",LandFragmentShader:"\n          uniform vec3 diffuse;\n          uniform vec3 emissive;\n          uniform float opacity;\n          varying vec3 vLightFront;\n          varying vec3 vIndirectFront;\n          #ifdef DOUBLE_SIDED\n              varying vec3 vLightBack;\n              varying vec3 vIndirectBack;\n          #endif\n          #include <common>\n          #include <packing>\n          #include <dithering_pars_fragment>\n          #include <color_pars_fragment>\n          #include <uv_pars_fragment>\n          #include <uv2_pars_fragment>\n          #include <map_pars_fragment>\n          #include <alphamap_pars_fragment>\n          #include <aomap_pars_fragment>\n          #include <lightmap_pars_fragment>\n          #include <emissivemap_pars_fragment>\n          #include <envmap_common_pars_fragment>\n          #include <envmap_pars_fragment>\n          #include <cube_uv_reflection_fragment>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <fog_pars_fragment>\n          #include <shadowmap_pars_fragment>\n          #include <shadowmask_pars_fragment>\n          #include <specularmap_pars_fragment>\n          #include <logdepthbuf_pars_fragment>\n          #include <clipping_planes_pars_fragment>\n  \n          uniform float waterHeight;\n          uniform float sandHeight;\n          uniform float gravelHeight;\n          uniform float snowHeight;\n          uniform sampler2D grassTexture;\n          uniform sampler2D sandTexture;\n          uniform sampler2D gravelTexture;\n          uniform sampler2D snowTexture;\n          varying vec3 vUv;\n  \n          float noise(vec2 n) {\n                  const vec2 d = vec2(0.0, 1.0);\n                   vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\n                  return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n              }\n          \n          void main() {\n              #include <clipping_planes_fragment>\n  \n              vec4 color = vec4(0.0,0.0,0.0,0.0);\n  \n              if (vUv.z < waterHeight - 0.2){\n                color = vec4(0.0,0.0,0.0,0.0);\n              } else {\n                color = texture2D(grassTexture, vUv.xy);\n                if (vUv.z < sandHeight){\n                  if (vUv.z > sandHeight - 0.2) {\n                    float ratio = (vUv.z - (sandHeight - 0.2)) / 0.2;\n                    color = mix(color, texture2D(sandTexture, vUv.xy), 1.0 - ratio);\n                  } else {\n                    color = texture2D(sandTexture, vUv.xy);\t\n                  }\n                } else {\n                  float snowModHeight = snowHeight + (noise(vUv.xy / 14.0) * 20.0);\n                  if (vUv.z > snowModHeight) {\n                    color = texture2D(snowTexture, vUv.xy);\n                  } else {\n                    if (vUv.z > gravelHeight) {\n                      float max = snowModHeight - gravelHeight;\n                      float relative = vUv.z - gravelHeight;\n                      float ratio = 1.0 - (relative / max);\n                      float noiseResult = noise(vUv.xy / 14.0);\n                      float mod = 0.0;\n                      if (noiseResult > ratio) {\n                        mod = 1.0;\n                      } else {\n                        if (noiseResult > ratio - 0.2) {\n                          mod = 1.0 - ((ratio - noiseResult) / 0.2);\n                        }\n                      }\n                      if (vUv.z < gravelHeight + 2.0) {\n                        mod = mod * (1.0 - (gravelHeight + 2.0 - vUv.z) / 2.0);\n                      }\n                      color = mix(color, texture2D(gravelTexture, vUv.xy), mod);\n                    }\n                    if (vUv.z > snowModHeight - 2.0) {\n                      float snowMod = (snowModHeight - vUv.z) / 2.0;\n                      color = mix(color, texture2D(snowTexture, vUv.xy), 1.0 - snowMod);\n                    }\n                  }\n                }\n              }\n  \n              ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n              vec3 totalEmissiveRadiance = emissive;\n              #include <logdepthbuf_fragment>\n              #include <map_fragment>\n              #include <color_fragment>\n              #include <alphamap_fragment>\n              #include <alphatest_fragment>\n              #include <specularmap_fragment>\n              #include <emissivemap_fragment>\n              reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n              #ifdef DOUBLE_SIDED\n                  reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n              #else\n                  reflectedLight.indirectDiffuse += vIndirectFront;\n              #endif\n              #include <lightmap_fragment>\n              reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( color.rgb );\n              #ifdef DOUBLE_SIDED\n                  reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n              #else\n                  reflectedLight.directDiffuse = vLightFront;\n              #endif\n              reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( color.rgb ) * getShadowMask();\n              #include <aomap_fragment>\n              vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n              #include <envmap_fragment>\n              gl_FragColor = vec4( outgoingLight, color.a );\n              #include <tonemapping_fragment>\n              #include <encodings_fragment>\n              #include <fog_fragment>\n              #include <premultiplied_alpha_fragment>\n              #include <dithering_fragment>\n          }\n      ",WaterVertexShader:"\n          #define MYWATER\n          varying vec3 vViewPosition;\n          #ifndef FLAT_SHADED\n              varying vec3 vNormal;\n          #endif\n          #include <common>\n          #include <uv_pars_vertex>\n          #include <uv2_pars_vertex>\n          #include <displacementmap_pars_vertex>\n          #include <envmap_pars_vertex>\n          #include <color_pars_vertex>\n          #include <fog_pars_vertex>\n          #include <morphtarget_pars_vertex>\n          #include <skinning_pars_vertex>\n          #include <shadowmap_pars_vertex>\n          #include <logdepthbuf_pars_vertex>\n          #include <clipping_planes_pars_vertex>\n  \n          varying vec3 vUv;\n          uniform float time;\n          uniform float amp;\n  \n          void main() {\n              vUv = position; \n              #include <uv_vertex>\n              #include <uv2_vertex>\n              #include <color_vertex>\n              #include <beginnormal_vertex>\n              #include <morphnormal_vertex>\n              #include <skinbase_vertex>\n              #include <skinnormal_vertex>\n              #include <defaultnormal_vertex>\n          #ifndef FLAT_SHADED\n              vNormal = normalize( transformedNormal );\n          #endif\n              #include <begin_vertex>\n              #include <morphtarget_vertex>\n              #include <skinning_vertex>\n              #include <displacementmap_vertex>\n              #include <project_vertex>\n              #include <logdepthbuf_vertex>\n              #include <clipping_planes_vertex>\n              vViewPosition = - mvPosition.xyz;\n              #include <worldpos_vertex>\n              #include <envmap_vertex>\n              #include <shadowmap_vertex>\n              #include <fog_vertex>\n  \n            vNormal = normalMatrix * normal;\n            float freq = 0.3;\n            float angle = ((time * 0.2) + (position.x * 8.0))*freq;\n            vUv.z += sin(angle)*amp;\n            vNormal = normalMatrix * normalize(vec3(-amp * freq * cos(angle),0.0,1.0));\n            vec4 modelViewPosition = modelViewMatrix * vec4(vUv, 1.0);\n            gl_Position = projectionMatrix * modelViewPosition;\n          }\n      ",WaterFragmentShader:"\n          #define MYWATER\n          uniform vec3 diffuse;\n          uniform vec3 emissive;\n          uniform vec3 specular;\n          uniform float shininess;\n          uniform float opacity;\n          #include <common>\n          #include <packing>\n          #include <dithering_pars_fragment>\n          #include <color_pars_fragment>\n          #include <uv_pars_fragment>\n          #include <uv2_pars_fragment>\n          #include <map_pars_fragment>\n          #include <alphamap_pars_fragment>\n          #include <aomap_pars_fragment>\n          #include <lightmap_pars_fragment>\n          #include <emissivemap_pars_fragment>\n          #include <envmap_common_pars_fragment>\n          #include <envmap_pars_fragment>\n          #include <cube_uv_reflection_fragment>\n          #include <fog_pars_fragment>\n          #include <bsdfs>\n          #include <lights_pars_begin>\n          #include <lights_phong_pars_fragment>\n          #include <shadowmap_pars_fragment>\n          #include <bumpmap_pars_fragment>\n          #include <normalmap_pars_fragment>\n          #include <specularmap_pars_fragment>\n          #include <logdepthbuf_pars_fragment>\n          #include <clipping_planes_pars_fragment>\n  \n          varying vec3 vPos;\n          uniform float time;\n          uniform sampler2D texture1;\n              varying vec3 vUv;\n          \n          void main() {\n            #include <clipping_planes_fragment>\n  \n            // Compute the ripple effect.\n            float mod1 = 16.0;\n            float mod2 = 0.4;\n              float xoffset = 0.05 * cos(time / 52.0 + mod1 * vUv.y) + 0.09 * cos(time / 65.0 + mod2 * vUv.y);\n                  float yoffset = 0.02 * cos(time / 35.0 + mod1 * vUv.x) + 0.07 * cos(time / 55.0 + mod2 * vUv.x);\n            vec4 diffuseColor = texture2D(texture1, vec2(vUv.x + xoffset, vUv.y + yoffset));\n            \n            //vec4 diffuseColor = vec4( diffuse, opacity );\n            ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n            vec3 totalEmissiveRadiance = emissive;\n            #include <logdepthbuf_fragment>\n            #include <map_fragment>\n            #include <color_fragment>\n            #include <alphamap_fragment>\n            #include <alphatest_fragment>\n            #include <specularmap_fragment>\n            #include <normal_fragment_begin>\n            #include <normal_fragment_maps>\n            #include <emissivemap_fragment>\n            #include <lights_phong_fragment>\n            #include <lights_fragment_begin>\n            #include <lights_fragment_maps>\n            #include <lights_fragment_end>\n            #include <aomap_fragment>\n            vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n            #include <envmap_fragment>\n            gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n            #include <tonemapping_fragment>\n            #include <encodings_fragment>\n            #include <fog_fragment>\n            #include <premultiplied_alpha_fragment>\n            #include <dithering_fragment>\n            gl_FragColor.a = 0.95;\n          }\n      "}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MyCamera=void 0;const r=t(0);n.MyCamera=class{constructor(e,n,t){this.preferredZoom=5,this.handleCameraMove=function(e){var n=new r.Vector2(0,0),t=this.terrain.getHeight(this.camera.position.x,this.camera.position.y);if(this.controls.KeysPressed.w&&(n.y+=1),this.controls.KeysPressed.s&&(n.y-=1),.25==this.camera.rotation.x)this.controls.KeysPressed.a&&(n.x-=1),this.controls.KeysPressed.d&&(n.x+=1),n.multiplyScalar(10*e),this.camera.position.x+=n.x,this.camera.position.y+=n.y;else{this.controls.KeysPressed.q&&(n.x-=1),this.controls.KeysPressed.e&&(n.x+=1),this.controls.KeysPressed.a&&(this.camera.rotation.y+=2.5*e),this.controls.KeysPressed.d&&(this.camera.rotation.y-=2.5*e),n.rotateAround(new r.Vector2,this.camera.rotation.y);let i=1;if(this.terrain.isWater(t))t=Math.max(t,3.5),n.multiplyScalar(.3);else{let e=this.terrain.getHeight(this.camera.position.x+.8*n.x,this.camera.position.y+.8*n.y),r=Math.abs(e-t);i=Math.max(.2,1-r)}n.multiplyScalar(10*e*i),this.camera.position.x+=n.x,this.camera.position.y+=n.y}var i=t+this.preferredZoom-this.camera.position.z;this.camera.position.z+=i*e*5},this.camera=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=80,this.camera.position.y=-1.5,this.camera.rotation.x=.25,this.controls=n,this.terrain=t,this.toggleCamera()}setLightPosition(e){e.position.x=this.camera.position.x,e.position.y=this.camera.position.y,e.position.z=this.camera.position.z}toggleCamera(){this.camera.rotation.y=0,.25==this.camera.rotation.x?(this.camera.rotation.x=1.5708,this.preferredZoom=2):this.camera.rotation.x=.25}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Controls=void 0;n.Controls=class{constructor(){this.KeysPressed={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1,f:!1};let e=this.KeysPressed,n=this;window.onblur=function(){e.w=e.a=e.s=e.d=!1},window.onkeydown=function(n){switch(n.keyCode){case 87:case 38:e.w=!0;break;case 65:case 37:e.a=!0;break;case 83:case 40:e.s=!0;break;case 68:case 39:e.d=!0;break;case 81:e.q=!0;break;case 69:e.e=!0;break;case 70:e.f=!0;default:return!0}return!1},window.onkeyup=function(n){switch(n.keyCode){case 87:case 38:e.w=!1;break;case 65:case 37:e.a=!1;break;case 83:case 40:e.s=!1;break;case 68:case 39:e.d=!1;break;case 81:e.q=!1;break;case 69:e.e=!1;break;case 70:e.f=!1;default:return!0}return!1},window.onwheel=function(e){n.camera&&.25==n.camera.camera.rotation.x&&(n.camera.preferredZoom-=.01*e.deltaY,n.camera.preferredZoom<1&&(n.camera.preferredZoom=1),n.camera.preferredZoom>1800&&(n.camera.preferredZoom=1800))}}}}]);
//# sourceMappingURL=bundle.js.map