pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                script {
                    npm install
                    npm run build
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                script {
                    npm test
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                script {
                    zip zipFile: 'build.zip', archive: true, dir: 'build'
                }
            }
        }
    }
}