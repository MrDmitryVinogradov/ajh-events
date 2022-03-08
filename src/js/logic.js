export default class GameLogic {
  constructor() {
    this.hits = 0;
    this.misses = 0;
  }

  renderField() {
    this.field = document.querySelector('.field');
    for (let i = 0; i < 16; i += 1) {
      const block = document.createElement('div');
      block.id = i;
      block.classList.add('block');
      this.field.appendChild(block);
    }
  }

  renderCounter() {
    this.game = document.querySelector('body');
    const hitsCounterBlock = document.createElement('div');
    hitsCounterBlock.innerHTML = '<div class = \'counter\'> <div> Попаданий </div> <div class = \'hits\'> 0 </div>';
    this.game.appendChild(hitsCounterBlock);
    const missesCounterBlock = document.createElement('div');
    missesCounterBlock.innerHTML = '<div class = \'counter\'> <div> Промахов </div> <div class = \'misses\'> 0 </div>';
    this.game.appendChild(missesCounterBlock);
  }

  activateBlock(field) {
    this.blocks = Array.from(field.querySelectorAll('.block'));
    let prevIndex = 0;
    this.blocks.forEach((element) => {
      if (element.classList.contains('activeBlock')) {
        element.classList.remove('activeBlock');
        prevIndex = element.index;
      }
    });
    const index = Math.floor(Math.random() * 15);
    if (prevIndex !== index) {
      this.blocks[index].classList.add('activeBlock');
    } else {
      this.blocks[0].classList.add('activeBlock');
    }
    this.misses += 1;
    this.game.querySelector('.misses').textContent = this.misses;
    this.checkWinner();
  }

  checkWinner() {
    if (this.hits === 20) {
      // eslint-disable-next-line no-alert
      alert('You win!');
      this.hits = 0;
      this.misses = 0;
      this.renderCounter();
    }
    if (this.misses === 5) {
      // eslint-disable-next-line no-alert
      alert('You lose!');
      this.hits = 0;
      this.misses = 0;
      this.renderCounter();
    }
  }

  click(field) {
    this.blocks = Array.from(field.querySelectorAll('.block'));
    this.blocks.forEach((element) => {
      element.addEventListener('click', () => {
        if (element.classList.contains('activeBlock')) {
          this.misses -= 1;
          this.hits += 1;
          this.game.querySelector('.hits').textContent = this.hits;
          element.classList.remove('activeBlock');
        }
      });
    });
  }
}
