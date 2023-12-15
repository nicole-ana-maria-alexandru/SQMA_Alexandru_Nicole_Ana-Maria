pipeline {
    agent any

    stages {
    stage('Run Test Suite 1') {
        steps {
        build job: 'Test-Suite-1-Job', parameters: [string(name: 'TEST_TO_RUN', value: 'initialBalance')]
        }
    }

    stage('Run Test Suite 2') {
        steps {
        build job: 'Test-Suite-2-Job', parameters: [string(name: 'TEST_TO_RUN', value: 'withdrawalDeposit')]
        }
    }

    stage('Run Test Suite 3') {
        steps {
        build job: 'Test-Suite-3-Job', parameters: [string(name: 'TEST_TO_RUN', value: 'negativeWithdrawal')]
        }
    }
    }

    post {
    always {
        cleanWs()
    }
    }
}
