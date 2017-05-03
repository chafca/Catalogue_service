package org.sid;

import java.util.List;

import org.sid.dao.ProduitRepository;
import org.sid.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import ch.qos.logback.core.net.SyslogOutputStream;

@SpringBootApplication
public class CataServiceApplication implements CommandLineRunner{

	@Autowired
	private ProduitRepository produitRepository;
	
	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(CataServiceApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		//ProduitRepository produitRepository = ctx.getBean(ProduitRepository.class);
		produitRepository.save(new Produit("LX 564", 900, 23));
		produitRepository.save(new Produit("HT 54", 100, 8));
		produitRepository.save(new Produit("HP 1234", 90, 3));
		
		List<Produit> prods = produitRepository.findAll();
		prods.forEach(p->System.out.println(p.getDesignation()));		
	}
}
