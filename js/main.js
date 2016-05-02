var img = 'https://unsplash.it/500/300/?image=';

new Vue({
	el: '#app',

	data: {
		questions: [{
			body: 'Questão 1',
			answers: [
				{ body: 'Reposta 1', choose: false, correct: false },
				{ body: 'Reposta 2', choose: false, correct: true },
				{ body: 'Reposta 3', choose: false, correct: false },
				{ body: 'Reposta 4', choose: false, correct: false }
			],
			img: img + '0',
			finished: false
		}, {
			body: 'Questão 2',
			answers: [
				{ body: 'Reposta 1', choose: false, correct: false },
				{ body: 'Reposta 2', choose: false, correct: true },
				{ body: 'Reposta 3', choose: false, correct: false },
				{ body: 'Reposta 4', choose: false, correct: false }
			],
			img: img + '1',
			finished: false
		}, {
			body: 'Questão 3',
			answers: [
				{ body: 'Reposta 1', choose: false, correct: false },
				{ body: 'Reposta 2', choose: false, correct: true },
				{ body: 'Reposta 3', choose: false, correct: false },
				{ body: 'Reposta 4', choose: false, correct: false }
			],
			img: img + '2',
			finished: false
		}],
		maxTimer: 10,
		timer: undefined
	},

	computed: {

		currentQuestion: function() {
			return this.unfinishedQuestions[0] || 0;
		},

		unfinishedQuestions: function() {

			return this.questions.filter(function(question) {
				return ! question.finished;
			});
		},
	},

	methods: {

		updateTimer: function() {

			if (this.currentQuestion === 0) { return; }

			this.timer--;

			if (this.timer == 0) {
				this.nextQuestion(this.currentQuestion);
			}

			setTimeout(this.updateTimer, 1000);
		},

		resetTimer: function() {
			this.timer = this.maxTimer;
		},

		respondQuestion: function(question, choosenAnswer) {

			question.answers.filter(function(answer) {
				if (answer.body === choosenAnswer.body) {
					answer.choose = true;
				}
			});

			this.nextQuestion(question);
		},

		nextQuestion: function(question) {
			question.finished = true;
			this.resetTimer();
		}
	},

	created: function() {
		this.resetTimer();
		this.updateTimer();
	}
});