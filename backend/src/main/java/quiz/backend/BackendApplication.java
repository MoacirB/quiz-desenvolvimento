package quiz.backend;

import java.util.List;
import java.util.Collections;

import java.io.File;
import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootApplication
@RestController
public class BackendApplication {

public static void main(String[] args) {
	try {
		SpringApplication.run(BackendApplication.class, args);
	}
	catch(Error err) {
		System.out.println(err);
	}
}

@CrossOrigin(origins = "http://localhost:3000")
@GetMapping("/questions")
public List<Question> questions() throws JsonParseException, JsonMappingException, IOException {
	ObjectMapper objectMapper = new ObjectMapper();
	File file  = new File("quiz/quiz.json");
	List<Question> questions = objectMapper.readValue(file, new TypeReference<List<Question>>() {});
	Collections.shuffle(questions);
	
	return questions;
	}
}