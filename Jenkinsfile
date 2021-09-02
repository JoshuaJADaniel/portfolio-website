pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                npm install
                npm run build
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                npm test -- --passWithNoTests
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                zip zipFile: 'build.zip', archive: true, dir: 'build'
            }
        }
    }
}