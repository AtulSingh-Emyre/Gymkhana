import React, { PureComponent } from 'react';
import Card from '../Cards';
import styled from 'styled-components';
interface IState {
    cards: any;
    cont: boolean;
}
class deck extends PureComponent {

    state: IState;
    deck!: HTMLDivElement;
    animation_in_progress: boolean;

    constructor(props: any) {
        super(props);
        this.state = {
            cards: [],
            cont: true
        }

        this.animation_in_progress = false
    }

    componentDidMount() {
        let new_cards = [];
        let center = {
            x: parseFloat(this.deck.style.width) / 2,
            y: parseFloat(this.deck.style.height) / 2
        }
        let total_number_of_cards=11;
        let middle_card_by_index=Math.floor(total_number_of_cards/2);
        let new_x = 0;
        let new_y=0;
        let new_zIndex=0;
        let new_scale=1;
        let color="white";
        let text="#1f4baa";

        for (let i=0; i<11; i++) {
            if (i<middle_card_by_index) { // left side of the deck
                // order the cards
                new_x = center.x - (450*(middle_card_by_index-i));
                new_y = center.y;

                // cascading the cards
                new_x = new_x + ((0.9 * 450) * (middle_card_by_index-i));

                // zIndex the cards
                new_zIndex = i;

                //scaling the cards
                new_scale = Math.pow(0.9, (middle_card_by_index-i));
            }
            else { // right side of the deck
                //colour active card
                if(i===middle_card_by_index) {
                    color="#1f4baa";
                    text="white";
                }
                else {
                    color="white";
                    text="#1f4baa";
                }

                // order the cards
                new_x = center.x + (450*(i-middle_card_by_index));
                new_y = center.y;

                // cascading the cards
                new_x = new_x - ((0.9 * 450) * (i-middle_card_by_index));

                // zIndex the cards
                new_zIndex = i * (-1.0);

                //scaling the cards
                new_scale = Math.pow(0.9, (i-middle_card_by_index));
            }
            new_cards.push(
                <Card 
                    txt = {text}
                    color = {color}
                    num = {i}
                    x = {new_x}
                    y = {new_y}
                    z_index = {(i===middle_card_by_index)? 100 : new_zIndex}
                    scale = {new_scale}
                />
            );
        }

        this.setState({cards: new_cards});
    }

    animate = () => {
        if(!this.animation_in_progress && this.state.cont) {
            this.animation_in_progress = true;

            let cardElement = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            let first_cards_left = cardElement[0].style.left;
            let first_cards_zIndex = cardElement[0].style.zIndex;
            let first_cards_transform = cardElement[0].style.transform;
            let first_cards_color = cardElement[0].style.backgroundColor;
            let first_cards_text = cardElement[0].style.color;

            for (let i=0; i<this.deck.children.length-1; i++) {
                cardElement[i].style.transitionDuration = '1.0s';
                cardElement[i].style.left = cardElement[i+1].style.left;
                cardElement[i].style.zIndex = cardElement[i+1].style.zIndex;
                cardElement[i].style.transform = cardElement[i+1].style.transform;
                cardElement[i].style.backgroundColor = cardElement[i+1].style.backgroundColor;
                cardElement[i].style.color = cardElement[i+1].style.color;
            }

            // special case
            cardElement[this.deck.children.length-1].style.transitionDuration = '0.2s';
            cardElement[this.deck.children.length-1].style.transform = `translate(-50%, -50%) scale(0)`;
            cardElement[this.deck.children.length-1].style.backgroundColor = "white";
            cardElement[this.deck.children.length-1].style.color = "#1f4baa";

            setTimeout(() => {
                cardElement[this.deck.children.length-1].style.transitionDuration = '0.0s';
                cardElement[this.deck.children.length-1].style.left = first_cards_left;
                cardElement[this.deck.children.length-1].style.zIndex = first_cards_zIndex;

                this.deck.insertBefore(cardElement[this.deck.children.length-1], cardElement[0]);

                setTimeout(() => {
                    cardElement[0].style.transitionDuration = '0.2s';
                    cardElement[0].style.transform = first_cards_transform;
                    cardElement[0].style.backgroundColor = first_cards_color;
                    cardElement[0].style.color = first_cards_text;

                    this.animation_in_progress = false;
                }, 100)
            }, 700)
        }
        else {
            return;
        }
    }

    componentDidUpdate() {
        setInterval(() => {
            this.animate();
        }, 2000);
    }

    render() {

        return (
            <div ref={(ref_id: HTMLDivElement) => this.deck = ref_id} style={{...styles}} onMouseEnter={() => this.setState({cont: false})} onMouseLeave={() => this.setState({cont: true})}>
                {this.state.cards}
            </div>
        )
    }
}

const styles = {
        width:'80%', 
        height: '400px', 
        transform:'translate(52%)',
        left: 0,
        top: 0,
        zIndex: 0
}

export default deck
