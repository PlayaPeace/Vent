'use strict';

let d, e, f, g, H, i, j, k, l, m, n, o, no, ot, dc;

let formulaResult0;
let formulaResult1;
let formulaResult2;
let formulaResult3;
let formulaResult4;
let formulaResult5;
let formulaResult6;
let formulaResult7;
let formulaResult8;
let formulaResult9;
let formulaResult10;
let formulaResult11;
let formulaResult12;
let formulaResult13;
let formulaResult14;
let hiddenFormulaCont;
let formulaCont;
let canvasCont;

let x;
let Lo;
let Aop;
let Vo;
let Tx;
let Kn;
let Ap;
let tireA;
let tireX;
let Ks;
let vqx;
let tringleTx;
let sH;
let P;
let Vv;
let Rpr

let sumX = document.querySelector('[data-sum-x]');
let sumLo = document.querySelector('[data-sumLo]');
let sumAop = document.querySelector('[data-sumAop]');
let sumVo = document.querySelector('[data-sumVo]');
let sumTx = document.querySelector('[data-sumTx]');
let sumKn = document.querySelector('[data-sumKn]');
let sumAp = document.querySelector('[data-sumAp]');
let sumtireA = document.querySelector('[data-tireA]');
let sumtireX = document.querySelector('[data-tireX]');
let sumKs = document.querySelector('[data-Ks]');
let sumvqx = document.querySelector('[data-vqx]');
let sumTringleTx = document.querySelector('[data-sumTringleTx]');
let sumH = document.querySelector('[data-sumH]');
let sumH2 = document.querySelector('[data-sumH2]');
let sumP = document.querySelector('[data-sumP]');
let sumVv = document.querySelector('[data-sumVv]');
let sumRpr = document.querySelector('[data-sumRpr]');

let inputs = document.querySelectorAll('input');


for (let elem = 0; elem < inputs.length; elem++){
   inputs[elem].addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
         const target = event.target;
         let maths = document.querySelectorAll('math');
         let buttons = document.querySelectorAll('button');

         if (target.parentElement.tagName == 'P' || target.parentElement.tagName == 'LABEL') {
            let p = target.parentElement.textContent;
            p += this.value;
            target.parentElement.textContent = p;
            this.remove();
         } else {
            const titleTwo = document.createElement('h2');
            titleTwo.textContent = this.value;
            this.parentElement.append(titleTwo);
            this.remove();
         }
         if (this.hasAttribute('data-object-title')) {
            ot = this.value;
            allValue('[data-object-title]', ot);
         }
         if (this.hasAttribute('data-citi')) {
            dc = this.value;
            allValue('[data-citi]', dc);
         }
         if (this.hasAttribute('data-number-office')) {
            no = this.value;
            allValue('[data-number-office]', no);
         }
         if (this.hasAttribute('data-length-room')) {
            d = this.value;
            allValue('[data-length-room]', d);
         }
         if (this.hasAttribute('data-width-room')) {
            e = this.value;
            allValue('[data-width-room]', e);
         }
         if (this.hasAttribute('data-height-room')) {
            f = this.value;
            allValue('[data-height-room]', f);
         }
         if (this.hasAttribute('data-сalculated-air')) {
            g = this.value;
            allValue('[data-сalculated-air]', g);
         }
         if (this.hasAttribute('data-degree-internal')) {
            H = this.value;
            allValue('[data-degree-internal]', H);
         }
         if (this.hasAttribute('data-height-working')) {
            i = this.value;
            allValue('[data-height-working]', i);
         }
         if (this.hasAttribute('data-afact')) {
            j = this.value;
            allValue('[data-afact]', j);
         }
         if (this.hasAttribute('data-speed-coefficient')) {
            k = this.value;
            allValue('[data-speed-coefficient]', k);
         }
         if (this.hasAttribute('data-temperature-coefficient')) {
            l = this.value;
            allValue('[data-temperature-coefficient]', l);
         }
         if (this.hasAttribute('data-temperature-m')) {
            m = this.value;
            allValue('[data-temperature-m]', m);
         }
         if (this.hasAttribute('data-system-control')) {
            n = this.value;
            allValue('[data-system-control]', n);
         }
         if (this.hasAttribute('data-plotSp')) {
            o = this.value;
            allValue('[data-plotSp]', o);
         }

         if (e && f && i) {
            e = e.split(',').join('.');
            f = f.split(',').join('.');
            i = i.split(',').join('.');
            x = Number(e) + Number(f) - Number(i);
            sumX.textContent = Number.isInteger(x) ? x : x.toFixed(2);
         }

         if (g) {
            g = g.split(',').join('.');
			formulaResult0 = `L_o = \\frac{${g}}{1} = ${(g)} \\frac{м^3}{ч}`;
			hiddenFormulaCont = 'hiddenFormula0';
			formulaCont='formula0';
			canvasCont='canvas0';
			calculate(formulaResult0, hiddenFormulaCont,formulaCont,canvasCont);

//           Lo = Number(g) / 1;
//          sumLo.textContent = Number.isInteger(Lo) ? Lo : Lo.toFixed(2);
			
            Aop = g / (1.5 * 3600);
			sumAop = Number.isInteger(Aop) ? Aop : Aop.toFixed(2);
			formulaResult1 = `А_ор = \\frac{${g}}{1.5 ⋅ 3600} = ${sumAop} \\frac{м^3}{ч}`;
			hiddenFormulaCont = 'hiddenFormula1';
			formulaCont='formula1';
			canvasCont='canvas1';
			calculate(formulaResult1, hiddenFormulaCont,formulaCont,canvasCont);
         
         }

         if (g && j) {
            g = g.split(',').join('.');
            j = j.split(',').join('.');
            Vo = Number(g) / (3600 * Number(j));
			sumVo = Number.isInteger(Vo) ? Vo : Vo.toFixed(2);
			formulaResult2 = `v_о = \\frac{${g}}{3600 ⋅ ${j}} = ${sumVo} \\frac{м}{с}`;
			hiddenFormulaCont = 'hiddenFormula2';
			formulaCont='formula2';
			canvasCont='canvas2';
			calculate(formulaResult2, hiddenFormulaCont,formulaCont,canvasCont);         
         }

         if (H) {
            H = H.split(',').join('.');
            Tx = Number(H) - 18;
			sumTx = Number.isInteger(Tx) ? Tx : Tx.toFixed(2);
			formulaResult3 = `\\Delta t_x = t_в - t_n = ${H} - 18 = ${sumTx} \\, ^\\circ C`;
			hiddenFormulaCont = 'hiddenFormula3';
			formulaCont='formula3';
			canvasCont='canvas3';
			calculate(formulaResult3, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (x && f) {
            f = f.split(',').join('.');
            allValue('[data-sumX]', x);
			
            Kn = Math.cbrt(1 + Math.pow(Number(sumX.textContent) / Number(f), 2));
            sumKn = Number.isInteger(Kn) ? Kn : Kn.toFixed(2);
			formulaResult4 = `k_n = \\sqrt[3]{1 +(${x} / ${f})^2} = ${sumKn}`;
			hiddenFormulaCont = 'hiddenFormula4';
			formulaCont='formula4';
			canvasCont='canvas4';
			calculate(formulaResult4, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (d && f) {
            d = d.split(',').join('.');
            f = f.split(',').join('.');
            Ap = (Number(d) * Number(f)) / 1;
            sumAp = Number.isInteger(Ap) ? Ap : Ap.toFixed(2);
			
//			formulaResult5 = `A_p = \\frac{${d} ⋅ ${f}}{1} = ${Ap} м^2}`;
			formulaResult5 = `A_p = \\frac{${d}⋅${f}}{1} = ${sumAp}м^2`;
			hiddenFormulaCont = 'hiddenFormula5';
			formulaCont='formula5';
			canvasCont='canvas5';
			calculate(formulaResult5, hiddenFormulaCont, formulaCont, canvasCont);

         }

         if (Ap) {
            allValue('[data-sumAp]', Ap);
         }

         if (Vo) {
            allValue('[data-sumVo]', Vo.toFixed(2));
         }

         if (j && Ap) {
            j = j.split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            tireA = Number(j) / Number(Ap);
            sumtireA = Number.isInteger(tireA) ? tireA : tireA.toFixed(4);
			
			formulaResult6 = `A = \\frac{${j}}{${Ap}} = ${sumtireA}`;
			hiddenFormulaCont = 'hiddenFormula6';
			formulaCont='formula6';
			canvasCont='canvas6';
			calculate(formulaResult6, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (x && k && Ap) {
            x = String(x).split(',').join('.');
            k = String(k).split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            tireX = Number(x) / (Number(k) * Math.sqrt(Number(Ap)));
            sumtireX = Number.isInteger(tireX) ? tireX : tireX.toFixed(2);
			
			formulaResult7 = `x = \\frac{${x}}{k⋅\\sqrt{${Ap}}} = ${sumtireX}м^2`;
			hiddenFormulaCont = 'hiddenFormula7';
			formulaCont='formula7';
			canvasCont='canvas7';
			calculate(formulaResult7, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (g && k && j && Ap) {
            g = String(g).split(',').join('.');
            j = String(j).split(',').join('.');
            k = String(k).split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            Ks = 0.9 + ((0.9 * Number(g)) / (Number(k) * Number(g))) * (5.4 / Math.sqrt(Number(Ap))) * Math.sqrt(Number(j)/Number(Ap));
            sumKs = Number.isInteger(Ks) ? Ks : Ks.toFixed(3);
			
			formulaResult8 = `k_s = 0,9 + \\frac{0,9⋅${g}}{${k}⋅${g}}⋅\\frac{5,4}{\\sqrt{${Ap}}}⋅\\sqrt{\\frac{${j}}{${Ap}}} = ${sumKs}`;
			hiddenFormulaCont = 'hiddenFormula8';
			formulaCont='formula8';
			canvasCont='canvas8';
			calculate(formulaResult8, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (k && Vo && j) {
            k = String(k).split(',').join('.');
			Vo = Vo.toFixed(2);
            Vo = String(Vo).split(',').join('.');
            j = String(j).split(',').join('.');
            vqx = ((Number(k) * Number(Vo) * Math.sqrt(Number(j))) / 5.4) * 1.1 * 0.9;
            sumvqx = Number.isInteger(vqx) ? vqx : vqx.toFixed(2);
			
			formulaResult9 = `v_x = \\frac{${k}⋅${Vo}⋅\\sqrt{${j}}}{5,4}⋅1,1⋅0,9 = ${sumvqx}м/c`;
			hiddenFormulaCont = 'hiddenFormula9';
			formulaCont='formula9';
			canvasCont='canvas9';
			calculate(formulaResult9, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (j && l) {
            l = String(l).split(',').join('.');
            j = String(j).split(',').join('.');
            tringleTx = ((Number(l) * 2 * Math.sqrt(Number(j))) / 5.4) * (1 / (1.1 * 0.9));
            sumTringleTx = Number.isInteger(tringleTx) ? tringleTx : tringleTx.toFixed(2);
			
			formulaResult10 = `\\Delta t_x = \\frac{${l}⋅2⋅\\sqrt{${j}}}{5,4}⋅\\frac{1}{1,1⋅0,9} = ${sumTringleTx} \\, ^\\circ C`;
			hiddenFormulaCont = 'hiddenFormula10';
			formulaCont='formula10';
			canvasCont='canvas10';
			calculate(formulaResult10, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (k && j && l && Vo) {
            k = String(k).split(',').join('.');
            l = String(l).split(',').join('.');
            j = String(j).split(',').join('.');
            Vo = String(Vo).split(',').join('.');
            sH = ((5.45 * Number(k) * Number(Vo) * Math.pow(Number(j), 1/4)) / Math.sqrt(Number(l) * 2));
            sumH = Number.isInteger(sH) ? sH : sH.toFixed(2);
			
			formulaResult11 = `H = \\frac{5,45⋅${k}⋅${Vo}⋅\\sqrt[4]{${j}}}{\\sqrt{${l}⋅2}} = ${sumH}м`;
			hiddenFormulaCont = 'hiddenFormula11';
			formulaCont='formula11';
			canvasCont='canvas11';
			calculate(formulaResult11, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (sH) {
            let num = sH / 2;
            sumH2.textContent = Number.isInteger(num) ? num : num.toFixed(2);
         }
         
         if (H) {
            H = String(H).split(',').join('.');
            P = (353 / (273 + (Number(H))));
            sumP = Number.isInteger(P) ? P : P.toFixed(2);
			
			formulaResult12 = `p = \\frac{353}{273 + t_в} = \\frac{353}{273 + (-${H})} = ${sumP}кг/м^3`;
			hiddenFormulaCont = 'hiddenFormula12';
			formulaCont='formula12';
			canvasCont='canvas12';
			calculate(formulaResult12, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (n) {
            n = String(n).split(',').join('.');
            Vv = (Number(n) / (0.21 * 3600));
            sumVv = Number.isInteger(Vv) ? Vv : Vv.toFixed(2);
			
			formulaResult13 = `v_в = \\frac{L_c}{f_{ж.с}} = \\frac{${n}}{0,21⋅3600} = ${sumVv}м/с`;
			hiddenFormulaCont = 'hiddenFormula13';
			formulaCont='formula13';
			canvasCont='canvas13';
			calculate(formulaResult13, hiddenFormulaCont, formulaCont, canvasCont);
         }

         if (P) {
            allValue('[data-sumP]', Number.isInteger(P) ? P : P.toFixed(2));
         }
         
         if (Vv) {
            allValue('[data-sumVv]',  Number.isInteger(Vv) ? Vv : Vv.toFixed(2));
         }

         if (P && Vv) {
			P = P.toFixed(2);
            P = String(P).split(',').join('.');
			Vv = Vv.toFixed(2);
            Vv = String(Vv).split(',').join('.');
            Rpr = (2.6 * Number(P) * Math.pow(Number(Vv), 2)) / 2;
            sumRpr = Number.isInteger(Rpr) ? Rpr : Rpr.toFixed(2);
			
			formulaResult14 = `\\Delta P_{пр} = \\frac{2,6⋅${P}⋅${Vv}^2}{2} = ${sumRpr} Па`;
			hiddenFormulaCont = 'hiddenFormula14';
			formulaCont='formula14';
			canvasCont='canvas14';
			calculate(formulaResult14, hiddenFormulaCont, formulaCont, canvasCont);
         }

         for (let ii = 0; ii < maths.length; ii++){
            let mathInputs = maths[ii].querySelectorAll('input');
            if (!mathInputs.length) {
               maths[ii].parentElement.classList.add('_active');
               buttons[ii].disabled = false;

            }
         }
      }
   });
}

function allValue(item, value) {
   if (item == '[data-object-title1]') {
      let items = document.querySelectorAll(item);
      for (let i = 0; i < items.length; i++){
         const titleTwo = document.createElement('h2');
         titleTwo.textContent = value;
         items[i].parentElement.append(titleTwo);
         items[i].remove();
      }
   } else {
      let items = document.querySelectorAll(item);
      for (let i = 0; i < items.length; i++){
         const span = document.createElement('span');
         span.textContent = value;
         items[i].parentElement.append(span);
         items[i].remove();
      }
   }
}


window.addEventListener('click', function (event) {
   let target = event.target;
   if (target.type == 'button') {
      if (target.parentElement.classList.contains('_active')) {
         let parent = target.parentElement;
         let child = parent.querySelector('math');
         if (child) {
            const dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = `<math xmlns="http://www.w3.org/1998/Math/MathML">` + child.innerHTML + `</math>`;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
         }
      }
   }
});

function calculate(formulaResult, hiddenFormulaCont, formulaCont, canvasCont) {
//  var value = document.getElementById('value').value;
  var hiddenFormulaDiv = document.getElementById(hiddenFormulaCont);
  
  hiddenFormulaDiv.innerHTML = `$$${formulaResult}$$`;
  MathJax.typesetPromise([hiddenFormulaDiv]).then(() => {
    var svg = hiddenFormulaDiv.querySelector('svg');
    var canvas = document.getElementById(canvasCont);
    if (svg) {
      var xml = new XMLSerializer().serializeToString(svg);
      var svg64 = btoa(unescape(encodeURIComponent(xml)));
      var img64 = 'data:image/svg+xml;base64,' + svg64;
      var img = new Image();
      img.onload = function() {
        // Увеличение разрешения и уменьшение размера
        var scaleFactor = 1.2;
        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;
        var ctx = canvas.getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
        ctx.drawImage(img, 0, 0);
        var png = canvas.toDataURL("image/png");
		
        var formulaDiv = document.getElementById(formulaCont);
//		var formulaDivT = document.getElementById('testf');
        document.getElementById(formulaCont).innerHTML = '';
		
        var pngImg = document.createElement('img');
        pngImg.src = png;
        pngImg.style.maxWidth = "80%"; // Ограничение ширины изображения
        formulaDiv.appendChild(pngImg);
		document.getElementById(hiddenFormulaCont).innerHTML = '';
      };
      img.src = img64;
	  
    }
  }).catch(err => console.error(err));
}

