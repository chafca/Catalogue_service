package org.sid.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Categorie {

	@Id
	Long id;
	String nom;
	
	public Categorie(){
		
	}
	public Categorie(String nom){
		this.nom=nom;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	
}
