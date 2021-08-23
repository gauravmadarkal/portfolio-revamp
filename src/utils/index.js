import Java from '../images/icons/java.png';
import JavaScript from '../images/icons/javascript.png';
import React from '../images/icons/react.png';
import Android from '../images/icons/android.png';
import Firebase from '../images/icons/firebase.png';
import Project1 from '../images/projects/project_1.png';
import Project2 from '../images/projects/project_2.png';
import Project3 from '../images/projects/project_3.png';
import Project4 from '../images/projects/project_4.png';

export const getIcon = (name) => {
	switch (name) {
		case 'java':
			return Java;
		case 'javascript':
			return JavaScript;
		case 'react':
			return React;
		case 'android':
			return Android;
		case 'firebase':
			return Firebase;
		case 'project_1':
			return Project1;
		case 'project_2':
			return Project2;
		case 'project_3':
			return Project3;
		case 'project_4':
			return Project4;
	}
}