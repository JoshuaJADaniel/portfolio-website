pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    nodejs('node-16.8.0') {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing...'
                    nodejs('node-16.8.0') {
                        sh 'npm test'
                    }
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