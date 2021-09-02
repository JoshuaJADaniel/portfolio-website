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
        stage('Package') {
            steps {
                script {
                    echo 'Packaging...'
                    zip zipFile: 'build.zip', overwrite: true, dir: 'build'
                }
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'build.zip', fingerprint: true
        }
    }
}