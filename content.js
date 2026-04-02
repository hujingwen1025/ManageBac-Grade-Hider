(function() {
  'use strict';

  function hideScores() {
    const allColorSecondary = Array.from(document.getElementsByClassName('color-secondary'));
    const allLabelScore = Array.from(document.getElementsByClassName('label label-score'));
    const allGradeCharts = Array.from(document.getElementsByClassName('tab-content with-charts'));
    const allPopoverBody = Array.from(document.getElementsByClassName('popover-content'));

    allColorSecondary.forEach(el => {
      if (el.innerHTML === '/8' && el.parentElement) {
        const gradeA = el.parentElement.innerHTML[0];
        el.parentElement.innerHTML = `<span style="cursor: pointer;" onclick="if (this.innerHTML == '⬜️') {this.innerHTML='${gradeA}/8'} else {this.innerHTML='⬜️'}">⬜️</span>`;
      }
    });

    allLabelScore.forEach(el => {
      if (el.innerHTML.length < 5 && el.parentElement) {
        const gradeB = el.innerHTML[0];
        const container = el.closest('[data-bs-content]') || el.parentElement.parentElement.parentElement.parentElement;
        if (container) {
          container.setAttribute('data-bs-content', null);
        }
        el.innerHTML = `<span style="cursor: pointer;" onclick="if (this.innerHTML == '⬜️') {this.innerHTML='${gradeB}'} else {this.innerHTML='⬜️'}">⬜️</span>`;
      }
    });

    allGradeCharts.forEach(el => {
      if (el.style.display !== 'none' && el.id !== 'gradeChart') {
        el.id = 'gradeChart';
        el.style.display = 'none';

        const showChartButton = document.createElement('button');
        const brElement = document.createElement('br');
        showChartButton.textContent = 'Show Chart';
        showChartButton.className = 'material-button';
        showChartButton.addEventListener('click', () => {
          const chart = document.getElementById('gradeChart');
          const button = document.getElementById('cvb');
          if (!chart || !button) return;
          if (chart.style.display === 'none') {
            chart.style.display = 'block';
            button.textContent = 'Hide Chart';
          } else {
            chart.style.display = 'none';
            button.textContent = 'Show Chart';
          }
        });
        showChartButton.id = 'cvb';
        showChartButton.style.cssText = 'background-color: #0080ff; border: none; border-radius: 3px; height: 30px; width: 100px; color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.3); margin: 5px; font-weight: bold; transition: all 0.2s ease;';
        showChartButton.onmouseover = () => {
          showChartButton.style.backgroundColor = '#003dcb';
          showChartButton.style.transform = 'scale(1.04)';
          showChartButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.65)';
        };
        showChartButton.onmouseout = () => {
          showChartButton.style.backgroundColor = '#0080ff';
          showChartButton.style.transform = 'scale(1)';
          showChartButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        };

        el.after(showChartButton);
        el.after(brElement);
      }
    });

    allPopoverBody.forEach(el => {
      const title = document.getElementsByClassName('popover-title')[0];
      if (el.style.display !== 'none' && el.id !== 'popoverBody' && title && title.innerHTML.includes('Criteria')) {
        el.id = 'popoverBody';
        el.style.display = 'none';

        const showPopoverBodyButton = document.createElement('button');
        const brElement2 = document.createElement('br');
        showPopoverBodyButton.textContent = 'Show';
        showPopoverBodyButton.id = 'spob';
        showPopoverBodyButton.className = 'material-button';
        showPopoverBodyButton.addEventListener('click', () => {
          const body = document.getElementById('popoverBody');
          const button = document.getElementById('spob');
          if (!body || !button) return;
          if (body.style.display === 'none') {
            body.style.display = 'block';
            button.textContent = 'Hide';
          } else {
            body.style.display = 'none';
            button.textContent = 'Show';
          }
        });
        showPopoverBodyButton.style.cssText = 'background-color: #0080ff; border: none; border-radius: 3px; height: 30px; width: 100px; color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.3); margin: 5px; font-weight: bold; transition: all 0.2s ease;';
        showPopoverBodyButton.onmouseover = () => {
          showPopoverBodyButton.style.backgroundColor = '#003dcb';
          showPopoverBodyButton.style.transform = 'scale(1.04)';
          showPopoverBodyButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.65)';
        };
        showPopoverBodyButton.onmouseout = () => {
          showPopoverBodyButton.style.backgroundColor = '#0080ff';
          showPopoverBodyButton.style.transform = 'scale(1)';
          showPopoverBodyButton.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        };

        el.after(showPopoverBodyButton);
        el.after(brElement2);
      }
    });
  }

  setInterval(hideScores, 100);
})();
