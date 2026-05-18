const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: [
            'Jan','Feb','Mar','Apr',
            'May','Jun','Jul','Aug',
            'Sep','Oct','Nov','Dec'
        ],
        datasets: [{
            label: 'Customer Churn',
            data: [18,20,17,15,16,14,13,12,14,13,11,10],
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(93,95,239,0.15)',
            borderColor: '#5d5fef',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true
    }
});

const pieCtx = document.getElementById('pieChart');

new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: [
            'Poor Service',
            'High Cost',
            'Competitor',
            'No Need'
        ],
        datasets: [{
            data: [35,25,20,20],
            backgroundColor: [
                '#5d5fef',
                '#8f94fb',
                '#9b59b6',
                '#6c63ff'
            ]
        }]
    }
});

const barCtx = document.getElementById('barChart');

new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: [
            'Chennai',
            'Bangalore',
            'Hyderabad',
            'Mumbai',
            'Delhi'
        ],
        datasets: [{
            label: 'Churn %',
            data: [22,19,17,14,10],
            backgroundColor: [
                '#5d5fef',
                '#7d5fff',
                '#8f94fb',
                '#9b59b6',
                '#6c63ff'
            ],
            borderRadius: 12
        }]
    },
    options: {
        responsive: true
    }
});

const donutCtx = document.getElementById('donutChart');

new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Retained',
            'Churned'
        ],
        datasets: [{
            data: [82,18],
            backgroundColor: [
                '#5d5fef',
                '#d9ddff'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

document.querySelector('.export-btn')
.addEventListener('click', function(){

    alert('Customer Churn Report Exported Successfully!');
});
