pipeline {
    agent any

    environment {
        HOME = '.'
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    npm install
                    npm run build
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    npm test
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying...'
                    zip zipFile: 'build.zip', archive: true, dir: 'build'
                }
            }
        }
    }
}