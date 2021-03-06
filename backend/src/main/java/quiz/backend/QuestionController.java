package quiz.backend;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class QuestionController {
	ObjectMapper objectMapper = new ObjectMapper();
	Question question[] = new Question[10];
	
	public QuestionController() throws JsonParseException, JsonMappingException, IOException {
		System.out.println("EEE");
		question[0] = objectMapper.readValue(new File("./questions.json"), Question.class);
	}
	
	@GetMapping("/questions")
	public Question questions() {
		return question[1];
	}
}
