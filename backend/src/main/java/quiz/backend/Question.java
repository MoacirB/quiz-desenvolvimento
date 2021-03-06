package quiz.backend;
/*import java.io.File;

public class Questions {
	File questions; 
	
	public Questions() {
		this.questions = new File("./questions.json");
	}
	
	public File getQuestions() {
		return this.questions;
	}
}*/

import java.util.List;
import java.util.Collections;

public class Question{
	private int id;
	private String text;
	private int correctOption;
	private List<Option> options;
	
	/*public Question(int id, String text, List<Option> options) {
		this.id = id;
		this.text = text;
		//this.options = options;
	}*/
	
	public int getId() {
		return id;
	}
	public String getText() {
		return text;
	}
	public int getCorrectOption() {
		return correctOption;
	}
	public List<Option> getOptions(){
		Collections.shuffle(options);
		return options;
	}
	
}
